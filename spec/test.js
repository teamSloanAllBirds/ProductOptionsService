const server = require('../server/index.js');
const db = require('../database/index.js');
//const $ = require('jquery');

//jest.unmock('jquery');

describe('get request with jquery', () => {
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
});
