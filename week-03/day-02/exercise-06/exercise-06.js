// 'use strict';

// Write a program that prints apple after 3 seconds.

function consoleMyInfo(obj) {
  for (var i in obj) {
    console.log(obj[i]);
  }
  return;
}
var zoe = {
  name: 'zoe',
  age: 21,
  skill: 'JavaScript'
};
setTimeout(function() { consoleMyInfo(zoe) }, 3 * 1000);

