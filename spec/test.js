const server = require('../server/index.js');
const db = require('../database/index.js');
const $ = require('jquery');


describe('test server requests', () => {

  test('tests to make sure server is sending on get', (done) => {
    const callback = (data) => {
      try {
        expect(Object.keys(data).length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    $.get('/api/5', (data) => callback(data));
  });

  xtest('send erroneous data to database to get error', (done) => {
    const callback = (data) => {
      try {
        expect(JSON.parse(data) instanceof Error).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    };
    $.get('/api/0', (error) => callback(error));
  });

  test('tests to make sure server is sending on post', (done) => {
    const callback = (data) => {
      try {
        expect(Object.keys(data).length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    $.post('/shopping-cart/', null, (data) => callback(data));
  });
});
