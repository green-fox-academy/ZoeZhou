'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function countMoreCandies(students){
  var moreList = students.filter(function(value,index){
    return value.candies > 4;
  })
  return moreList;
}
function countAverageCandies(students){
  var average = 0;
  var sum = 0;
  students.forEach(function(value) {
    sum += value.candies;
  }, this);
  average = sum / (students.length);
  return average;
}
console.log(countMoreCandies(students));
console.log(countAverageCandies(students));