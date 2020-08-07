const mysql = require('mysql');
const config = require('../config.js');
const db = mysql.createConnection(config);

db.connect();

var retrieveProduct = function (id, res) {
  db.query(`SELECT * FROM product_options WHERE _id=${id}`, function (error, results, fields) {
    if (error) {
      res.json(new Error());
    } else {
      res.json(results[0]);
    }
  });
}

module.exports = {
  db,
  retrieveProduct
};