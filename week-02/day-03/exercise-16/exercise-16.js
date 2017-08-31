function factorio(arg) {
	var arr = [1];
	for (var i = 2; i <= arg; i++) {
		if (arg % i === 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(factorio(15));
