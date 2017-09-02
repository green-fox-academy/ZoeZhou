'use strict';
function greet(arg) {
	if (arg === undefined) {
		arg = 'guest';
	}
	return 'Gerrtings, dear ' + arg;
}
var al ;
console.log(greet(al));