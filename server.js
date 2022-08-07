const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const {notes} = require('./Develop/db/db.json');
const htmlRoutes = require('./routes/htmlRoutes');

app.get('/api/notes', (req, res) => {
let results = notes;
console.log(req.query)
    res.json(results);
});

app.use(express.urlencoded(
    {extended: true}));

app.use(express.json());

app.use(express.static('public'));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// function createNewNote(body, notes) {
//     const notes = body;
//     zookeepers.push(zookeeper);
//     fs.writeFileSync(
//       path.join(__dirname, "../data/zookeepers.json"),
//       JSON.stringify({ zookeepers }, null, 2)
//     );
//     return zookeeper;
//   }


app.listen(PORT, () => {
    console.log(`API Server on port ${PORT}!`)
});

