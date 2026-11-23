const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new Database(path.join(__dirname, 'database.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    number INTEGER NOT NULL UNIQUE CHECK(number BETWEEN 1 AND 99),
    position TEXT NOT NULL CHECK(position IN ('Bramkarz','Obrońca','Pomocnik','Napastnik')),
    goals INTEGER NOT NULL DEFAULT 0 CHECK(goals >= 0),
    assists INTEGER NOT NULL DEFAULT 0 CHECK(assists >= 0),
    appearances INTEGER NOT NULL DEFAULT 0 CHECK(appearances >= 0),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS matches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    opponent TEXT NOT NULL,
    match_date TEXT NOT NULL,
    match_time TEXT NOT NULL DEFAULT '',
    location TEXT NOT NULL DEFAULT '',
    result TEXT NOT NULL DEFAULT '-',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);
const countPlayers = db.prepare('SELECT COUNT(*) AS n FROM players').get().n;
if (!countPlayers) {
  const insert = db.prepare('INSERT INTO players (name, number, position, goals, assists, appearances) VALUES (?, ?, ?, ?, ?, ?)');
  const seed = db.transaction(() => {
    insert.run('Jan Kowalski', 1, 'Bramkarz', 0, 0, 8);
    insert.run('Adam Nowak', 9, 'Napastnik', 7, 2, 8);
    insert.run('Michał Wiśniewski', 10, 'Pomocnik', 3, 5, 7);
  }); seed();
}
app.use(express.json({ limit: '100kb' }));
app.use(express.static(__dirname));
const sendError = (res, status, message) => res.status(status).json({ error: message });
const validInt = (v, min, max=1000000) => Number.isInteger(Number(v)) && Number(v) >= min && Number(v) <= max;

app.get('/api/players', (_req,res) => res.json(db.prepare('SELECT * FROM players ORDER BY number').all()));
app.post('/api/players', (req,res) => {
  const {name, number, position, goals=0, assists=0, appearances=0} = req.body || {};
  if (!name || !String(name).trim()) return sendError(res,400,'Imię i nazwisko są wymagane.');
  if (!validInt(Number(number),1,99)) return sendError(res,400,'Numer musi być liczbą od 1 do 99.');
  if (!['Bramkarz','Obrońca','Pomocnik','Napastnik'].includes(position)) return sendError(res,400,'Wybierz prawidłową pozycję.');
  if (![goals,assists,appearances].every(v => validInt(Number(v),0))) return sendError(res,400,'Statystyki muszą być nieujemnymi liczbami całkowitymi.');
  try {
    const info = db.prepare('INSERT INTO players (name,number,position,goals,assists,appearances) VALUES (?,?,?,?,?,?)').run(String(name).trim(),Number(number),position,Number(goals),Number(assists),Number(appearances));
    res.status(201).json(db.prepare('SELECT * FROM players WHERE id=?').get(info.lastInsertRowid));
  } catch(e) { if (String(e.code).startsWith('SQLITE_CONSTRAINT')) return sendError(res,409,'Ten numer koszulki jest już zajęty.'); throw e; }
});
app.put('/api/players/:id', (req,res) => {
  const old=db.prepare('SELECT * FROM players WHERE id=?').get(Number(req.params.id)); if(!old) return sendError(res,404,'Nie znaleziono zawodnika.');
  const p={...old,...req.body};
  if(!p.name || !String(p.name).trim() || !validInt(Number(p.number),1,99) || !['Bramkarz','Obrońca','Pomocnik','Napastnik'].includes(p.position) || ![p.goals,p.assists,p.appearances].every(v=>validInt(Number(v),0))) return sendError(res,400,'Nieprawidłowe dane zawodnika.');
  try { db.prepare('UPDATE players SET name=?,number=?,position=?,goals=?,assists=?,appearances=? WHERE id=?').run(String(p.name).trim(),Number(p.number),p.position,Number(p.goals),Number(p.assists),Number(p.appearances),old.id); res.json(db.prepare('SELECT * FROM players WHERE id=?').get(old.id)); }
  catch(e){ if(String(e.code).startsWith('SQLITE_CONSTRAINT')) return sendError(res,409,'Ten numer koszulki jest już zajęty.'); throw e; }
});
app.delete('/api/players/:id', (req,res) => { const info=db.prepare('DELETE FROM players WHERE id=?').run(Number(req.params.id)); if(!info.changes) return sendError(res,404,'Nie znaleziono zawodnika.'); res.status(204).end(); });
app.get('/api/matches', (_req,res) => res.json(db.prepare('SELECT * FROM matches ORDER BY match_date, match_time').all()));
app.post('/api/matches', (req,res) => {
  const {opponent,match_date,match_time='',location='',result='-'}=req.body||{};
  if(!opponent || !String(opponent).trim()) return sendError(res,400,'Nazwa przeciwnika jest wymagana.');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(match_date||'') || Number.isNaN(Date.parse(match_date))) return sendError(res,400,'Podaj prawidłową datę meczu.');
  if(match_time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(match_time)) return sendError(res,400,'Podaj prawidłową godzinę.');
  if(String(result).length>20) return sendError(res,400,'Wynik jest zbyt długi.');
  const info=db.prepare('INSERT INTO matches (opponent,match_date,match_time,location,result) VALUES (?,?,?,?,?)').run(String(opponent).trim(),match_date,match_time,String(location).trim(),String(result).trim()||'-');
  res.status(201).json(db.prepare('SELECT * FROM matches WHERE id=?').get(info.lastInsertRowid));
});
app.put('/api/matches/:id', (req,res) => {
  const old=db.prepare('SELECT * FROM matches WHERE id=?').get(Number(req.params.id)); if(!old) return sendError(res,404,'Nie znaleziono meczu.');
  const m={...old,...req.body};
  if(!m.opponent || !String(m.opponent).trim() || !/^\d{4}-\d{2}-\d{2}$/.test(m.match_date||'') || (m.match_time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(m.match_time))) return sendError(res,400,'Nieprawidłowe dane meczu.');
  db.prepare('UPDATE matches SET opponent=?,match_date=?,match_time=?,location=?,result=? WHERE id=?').run(String(m.opponent).trim(),m.match_date,m.match_time||'',m.location||'',m.result||'-',old.id);
  res.json(db.prepare('SELECT * FROM matches WHERE id=?').get(old.id));
});
app.delete('/api/matches/:id', (req,res) => { const info=db.prepare('DELETE FROM matches WHERE id=?').run(Number(req.params.id)); if(!info.changes) return sendError(res,404,'Nie znaleziono meczu.'); res.status(204).end(); });
app.get('/api/stats', (_req,res) => res.json(db.prepare('SELECT (SELECT COUNT(*) FROM players) AS players,(SELECT COALESCE(SUM(goals),0) FROM players) AS goals,(SELECT COALESCE(SUM(assists),0) FROM players) AS assists,(SELECT COUNT(*) FROM matches) AS matches').get()));
app.use('/api', (_req,res) => sendError(res,404,'Nie znaleziono endpointu API.'));
app.listen(PORT, () => console.log(`Football Manager działa: http://localhost:${PORT}`));
