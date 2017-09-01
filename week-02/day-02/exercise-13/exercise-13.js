'use strict';
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

var secondsPast = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
var leftSecond = 24 * 60 * 60 - secondsPast;

console.log("left seconds today : " + leftSecond);