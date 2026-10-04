#!/usr/bin/env node
/**
 * 대형 이벤트 주간 자동 업데이트
 * 사이트 서버의 /api/event-refresh를 호출해 각 이벤트의 최신 상황을 받아 events.json을 갱신한다.
 * Gemini 키는 서버(Railway)에만 있으면 되고, 이 스크립트에는 키가 필요 없다.
 *
 * 봇이 바꿀 수 있는 것: desc, desc_en, date, date_en, status, statusLabel, targetDate, updated
 * 봇이 못 바꾸는 것: id, name, category, scale, magnitude(충격지수), mechanisms, impacts
 *   → 편집 판단(충격지수·메커니즘)은 사람 몫으로 남긴다.
 *
 * 실행: node scripts/update-events.js
 */
const fs = require('fs');
const path = require('path');

const EVENTS_PATH = path.join(__dirname, '..', 'events.json');
const API_BASE = process.env.API_BASE || 'https://www.ddumarketnews.co.kr';

// 봇이 수정 가능한 필드
const MUTABLE = ['desc', 'desc_en', 'date', 'date_en', 'status', 'targetDate'];
const VALID_STATUS = ['ongoing', 'upcoming', 'watch', 'completed'];
const STATUS_LABEL = {
  ongoing:   ['🔴 진행 중',  '🔴 Ongoing'],
  upcoming:  ['🟠 예정',     '🟠 Scheduled'],
  watch:     ['📡 모니터링', '📡 Monitoring'],
  completed: ['🟢 완료',     '🟢 Completed'],
};

const todayKST = () => new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);

function log(...a) { console.log('[update-events]', ...a); }

async function askServer(event) {
  const res = await fetch(`${API_BASE}/api/event-refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: event.id }),
    signal: AbortSignal.timeout(90000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data;
}

/** 응답이 안전하게 반영 가능한지 검사. 문제가 있으면 사유 문자열 반환, 없으면 null */
function reject(u, event) {
  if (!u || u.changed !== true) return 'no change';
  if (typeof u.desc !== 'string' || u.desc.trim().length < 20 || u.desc.length > 600) return 'desc 길이 이상';
  if (typeof u.desc_en !== 'string' || u.desc_en.trim().length < 20 || u.desc_en.length > 900) return 'desc_en 길이 이상';
  if (typeof u.date !== 'string' || !u.date.trim() || u.date.length > 80) return 'date 이상';
  if (!VALID_STATUS.includes(u.status)) return `status 값 이상(${u.status})`;
  if (u.targetDate != null && !/^\d{4}-\d{2}-\d{2}$/.test(u.targetDate)) return 'targetDate 형식 이상';
  // 예정 상태인데 목표일이 과거면 신뢰 불가
  if (u.status === 'upcoming' && u.targetDate && u.targetDate < todayKST()) return '예정인데 목표일이 과거';
  // 설명이 사실상 동일하면 변경으로 치지 않음
  if (u.desc.trim() === (event.desc || '').trim()) return 'desc 동일';
  return null;
}

async function main() {
  const original = fs.readFileSync(EVENTS_PATH, 'utf8');
  const events = JSON.parse(original);
  const beforeCount = events.length;
  const today = todayKST();
  let changed = 0, failed = 0;

  for (const event of events) {
    try {
      const u = await askServer(event);
      const why = reject(u, event);
      if (why) { log(`- ${event.id}: 유지 (${why})`); continue; }

      for (const k of MUTABLE) if (u[k] !== undefined) event[k] = u[k];
      // 상태가 바뀌면 라벨도 표준값으로 맞춘다 (기존 커스텀 라벨은 상태 유지 시 보존)
      const [ko, en] = STATUS_LABEL[u.status];
      event.statusLabel = ko;
      event.statusLabel_en = en;
      event.dateConfirmed = !!u.targetDate;
      event.updated = today;
      changed++;
      log(`✓ ${event.id}: 갱신 (${u.status})`);
    } catch (e) {
      failed++;
      log(`! ${event.id}: 실패 — ${e.message} (원본 유지)`);
    }
    await new Promise(r => setTimeout(r, 2500)); // 서버 rate limit(분당 30회) 여유
  }

  // ── 최종 안전 검사: 하나라도 어긋나면 통째로 취소
  if (events.length !== beforeCount) { console.error('이벤트 개수가 변했습니다. 중단.'); process.exit(1); }
  if (failed > events.length / 2) { console.error('절반 이상 실패. 중단.'); process.exit(1); }
  for (const e of events) {
    if (!e.id || !e.name || !e.desc || !Array.isArray(e.impacts) || typeof e.magnitude !== 'number') {
      console.error(`필수 필드 누락: ${e.id}. 중단.`); process.exit(1);
    }
  }

  if (changed === 0) { log('변경 사항 없음. 파일 그대로 둡니다.'); return; }

  const out = JSON.stringify(events, null, 2);
  JSON.parse(out); // 최종 파싱 확인
  fs.writeFileSync(EVENTS_PATH, out);
  log(`완료: ${changed}건 갱신, ${failed}건 실패`);
}

main().catch(e => { console.error('중단:', e.message); process.exit(1); });
