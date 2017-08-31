var aj = [3, 4, 5, 6, 7];
aj.reverse();
console.log(aj);
for (var i = 0; i < (aj.length - 1) / 2; i++) {
	var temp;
	temp = aj[i];
	aj[i] = aj[aj.length - i - 1]
	aj[aj.length - i - 1] = temp;
}
console.log(aj);
var temp = [];
for (var i = aj.length - 1; i >= 0; i--) {
	temp.push(aj[i]);
}
aj = temp;
console.log(aj);