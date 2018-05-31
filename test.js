var assert = require('assert');
const app = require('./app.js');

console.log(app);

describe('Unit Tests For The Wonky Calculator', function() {
  it('should correctly square a number', function() {
    let testnum = 16;
    let test_square = testnum * testnum;
    assert.equal(app.square_number(testnum), test_square);
  });

  it('should correctly cube a number', function() {
    let testnum = 16;
    let test_cube = testnum * testnum * testnum;
    assert.equal(app.cube_number(testnum), test_cube);
  })
})
