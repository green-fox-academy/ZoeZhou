'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
function printFruits(fruit) {
  console.log(fruit);
  return;
}
setTimeout(function () {
  printFruits('apple')
}, 0);
setTimeout(function () {
  printFruits('pear')
}, 1 * 1000);
setTimeout(function () {
  printFruits('melon')
}, 3 * 1000);
setTimeout(function () {
  printFruits('grapes')
}, 5 * 1000);