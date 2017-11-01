// Create a function that takes an array of integers and returns the average of the even numbers from that array
'use strict';

function countAverageOfEvenNumbers(array) {
  if(!Array.isArray(array)) {
    return 'please input an array';
  }
  let sum = 0;
  let evenNums = 0;

  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums++;
      sum = sum + array[i];
    }
  }
  if (evenNums === 0) {
    return  'no even number';
  }
  return sum/evenNums;
}

let testArray = [1,2,3,4];

console.log(countAverageOfEvenNumbers(testArray), 'should be 3');