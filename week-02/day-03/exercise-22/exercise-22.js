var af = [4, 5, 6, 7];
af.forEach(function (element) {
	console.log(element);
});
console.log("***************");
af.map(function (value) {
	console.log(value);
})
console.log("***************");
af.reduce(function (pre, current) {
	console.log(current);
}, 0)
console.log("***************");
af.reduce(function (pre, current, index, array) {
	console.log(pre);
	if (index === array.length - 1) {
		console.log(current);
	}
	return current;

})