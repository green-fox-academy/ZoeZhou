'use strict';
function printer1() {
	var argsArray = Array.prototype.slice.call(arguments);  //turn arguments to a real array
	argsArray.forEach(function (value) {
		console.log(value);
	})
}
function printer2() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

printer1(1, 2, 3, 4, 5);