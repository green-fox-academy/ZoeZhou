function greet(arg) {
	arg = arg || "guest";
	return 'Gerrtings, dear ' + arg;
}
var al = 'EPAM';
console.log(greet(al));