var test = require('tape');
var getIndex = require('./get-index.js');

test('is a function or not', function(t) {
  t.end();
});

test('is a list or not', function(t) {
  var actual = getIndex('123');
  var expect = false;
  t.equal(actual, expect);
  t.end();
});

test('do not set value', function(t) {
  var actual = getIndex([1,2,3]);
  var expect = false;
  t.equal(actual, expect);
  t.end();
})

test('exist value in list', function(t) {
  var actual = getIndex([1,2,3], 2);
  var expect = 1;
  t.equal(actual, expect);
  t.end();
});

test('exist value in list', function(t) {
  var actual = getIndex([1,2,3], 1);
  var expect = 0;
  t.equal(actual, expect);
  t.end();
});

test('exist value in list', function(t) {
  var actual = getIndex([1,2,3], 3);
  var expect = 2;
  t.equal(actual, expect);
  t.end();
});

test('value not exist in list', function(t) {
  var actual = getIndex([1,2,3], 4);
  var expect = -1;
  t.equal(actual, expect);
  t.end();
});
