// app.delete('/api/notes/:id', (req, res) => {
//   const notes = JSON.parse(fs.readFileSync('./db/db.json'));
//   const dltNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
//   fs.writeFileSync('./db/db.json', JSON.stringify(dltNote));
//   res.json(dltNote);
// });

