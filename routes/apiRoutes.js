const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    app.get('/api/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json', 'utf8');
    db = JSON.parse(db);

    const { title, text } = req.body;

    let newNote = {
        id: title,
        title,
        text,
    };

    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db, null, 2));
    res.json(db);
});

app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'));
    let deleteNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
});

};