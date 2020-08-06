//const server = require('../server/index.js');
const db = require('../database/index.js');
//const $ = require('jquery');

test('tests to make sure server is up and running', () => {
  const $ = require('jquery');
  return $.ajax({
    type: 'GET',
    url: '/',
    success: function(data) {
      return data;
    }
  }).then((data) => {
    expect(data.status).toBe(200);
    done();
  });
});