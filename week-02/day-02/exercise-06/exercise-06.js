'use strict';
var dailyHours = 6;
var semesterLength = 17;
var workingDays = 5;
var weeklyWorkHours = 52;

var workdays1 = dailyHours * semesterLength * workingDays;
var workdays2 = (dailyHours * semesterLength * workingDays) / (semesterLength * weeklyWorkHours) * 100 + "%";

console.log(workdays1);
console.log(workdays2);