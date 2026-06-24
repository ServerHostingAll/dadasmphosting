const Database = require('better-sqlite3');
const db = new Database('./data/hosting.db');

// Inizializza la tabella se non esiste
// Aggiunta tabella per gestire le richieste
db.prepare(`
  CREATE TABLE IF NOT EXISTS server_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT,
    plan TEXT,
    status TEXT DEFAULT 'pending' -- 'pending', 'active', 'rejected'
  )
`).run();

module.exports = db;