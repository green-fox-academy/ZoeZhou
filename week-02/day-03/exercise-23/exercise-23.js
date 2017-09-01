'use strict';
var s = [1, 2, 3, 8, 5, 6];
s.forEach(function(value,index,array) {
	if(index = 3){
		array[index] = 4;
	}
}, this);
console.log(s[3]);