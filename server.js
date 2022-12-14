const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
 const htmlRoutes = require('./routes/htmlRoutes');
 const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded(
    {extended: true}));

app.use(express.json());

app.use(express.static('public'));


 app.use('/api', apiRoutes);
 app.use('/', htmlRoutes);

 
app.post('/api/notes', (req, res) => {

    // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
}); 


app.listen(PORT, () => {
    console.log(`API Server on port ${PORT}!`)
});

