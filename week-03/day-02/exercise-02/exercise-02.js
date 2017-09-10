'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
var countE = fruits.map(function(value) {
  var array = value.split('');
  var count = 0;
  array.forEach(function(value) {
    if (value === 'e') {
      count += 1;
    }
  })
  return count;
})
console.log(countE);