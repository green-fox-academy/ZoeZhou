'use strict';
function factorio(arg) {
	var sum = 1;
	for (var i = 2; i <= arg; i++) {
		sum *= i;
	}
	return sum;
}

console.log(factorio(15));
