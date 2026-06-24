const express = require('express');
const app = express();
const db = require('./database');

app.use(express.json());

// Esempio: Cambiare stato server
app.post('/api/manage-server', (req, res) => {
    const { serverId, action } = req.body;
    // Qui andrebbe la logica che comunica con Docker o il tuo sistema di hosting
    const status = action === 'start' ? 'running' : 'stopped';
    
    db.prepare('UPDATE servers SET status = ? WHERE id = ?').run(status, serverId);
    
    res.json({ success: true, newStatus: status });
});

app.listen(3001, () => console.log('Backend gestore attivo sulla porta 3001'));