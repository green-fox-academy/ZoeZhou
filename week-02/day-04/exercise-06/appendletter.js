'use strict';
// Add "e" to every string in far

var far = ['appl', 'fiddl', 'Bruce Le', 'hom'];

far.forEach(function(value,index,array){
  array[index] = value + 'e';
})

console.log(far);