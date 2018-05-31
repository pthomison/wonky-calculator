var express = require('express');

var app = express();

const square_number = function square_number(number) {
  return number * number;
}

const cube_number = function cube_number(number) {
  return number * number * number;
}

app.get('/', function (req, res) {
  res.send('Welcome to the wonky calculator');
});

app.get('/square/:number', function (req, res) {
  res.send('The square of ' + String(req.params.number) + ' is ' + square_number(req.params.number));
});

app.get('/cube/:number', function (req, res) {
  res.send('The cube of ' + String(req.params.number) + ' is ' + cube_number(req.params.number));
});

function main() {
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}

// exports.square_number = square_number
// exports.cube_number = cube_number

if (require.main === module) {
    main();
}
