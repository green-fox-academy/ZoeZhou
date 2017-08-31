var animals = ["dog", "cat", "kitten"];

animalsPlusS = animals.map(function (value) {
	return value + 's';
});

animals.forEach(function (value, index, array) {
	array[index] = value + "s";
})
console.log(animalsPlusS);
console.log("*********************************************");
console.log(animals);