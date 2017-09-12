var test = require('tape');
var romanNumeralConverter = require('./romanNumeralConverter.js');

test('easy test', function(t) {
  var actual = romanNumeralConverter(5);
  var expect = 'V';
  t.equal(actual, expect);
  t.end();
});

test('less than 10', function(t) {
  var actual = romanNumeralConverter(4);
  var expect = 'IV';
  t.equal(actual, expect);
  t.end();
});

test('less than 10', function(t) {
  var actual = romanNumeralConverter(8);
  var expect = 'VIII';
  t.equal(actual, expect);
  t.end();
});

test('less than 10', function(t) {
  var actual = romanNumeralConverter(9);
  var expect = 'IX';
  t.equal(actual, expect);
  t.end();
});

test('random test', function(t) {
  var actual = romanNumeralConverter(1000);
  var expect = 'M';
  t.equal(actual, expect);
  t.end();
});

test('random test', function(t) {
  var actual = romanNumeralConverter(1990);
  var expect = 'MCMXC';
  t.equal(actual, expect);
  t.end();
});

test('random test', function(t) {
  var actual = romanNumeralConverter(2007);
  var expect = 'MMVII';
  t.equal(actual, expect);
  t.end();
});