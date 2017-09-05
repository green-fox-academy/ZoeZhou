'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8

function selectLastEvenNumber(array, printFunction) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      printFunction(array[i]);
      return;
    }
  }
}