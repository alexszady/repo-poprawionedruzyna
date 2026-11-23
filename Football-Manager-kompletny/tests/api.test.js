// Testy integracyjne do wykonania po uruchomieniu serwera: node --test
const test = require('node:test');
const assert = require('node:assert/strict');
const BASE = process.env.BASE_URL || 'http://localhost:3000';
test('API zwraca listę zawodników', async () => { const r=await fetch(`${BASE}/api/players`); assert.equal(r.status,200); assert.ok(Array.isArray(await r.json())); });
test('API zwraca listę meczów', async () => { const r=await fetch(`${BASE}/api/matches`); assert.equal(r.status,200); assert.ok(Array.isArray(await r.json())); });
test('API zwraca statystyki', async () => { const r=await fetch(`${BASE}/api/stats`); assert.equal(r.status,200); const x=await r.json(); assert.ok(Number.isInteger(x.players)); });
