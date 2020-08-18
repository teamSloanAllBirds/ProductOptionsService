const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const $ = require('jquery');
const db = require('../database/index.js');


const app = express();
const port = 3001;


app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.get('/api/productoptions/:id', (req, res) => {
  const id = req.params.id;
  db.retrieveProduct(id, res);
});

app.post('/shopping-cart/', (req, res) => {
  res.json('You have added an item to the cart' + JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
