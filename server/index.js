const express = require('express')
const app = express();
const $ = require('jquery');
const bodyparser = require('body-parser');
const db = require('../database/index.js')
const port = 3001;

app.use(express.static(__dirname + '../public/'));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.get('/api/:id', function (req, res) {
  var id = req.params.id;
  db.retrieveProduct(id, res);
});

app.post('/shopping-cart/', function (req, res) {
  res.json('You have added an item to the cart');
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});