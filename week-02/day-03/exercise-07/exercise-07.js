'use strict';
function draw1() {
	for (var i = 0; i < 4; i++) {
		var stars, startPoint, str, j;
		stars = 2 * i + 1;
		startPoint = 3 - i;
		str = [" ", " ", " ", " ", " ", " ", " "];
		for (j = startPoint; j < startPoint + stars; j++) {
			str[j] = "*";
		}
		console.log(str.join(''));
	}
}
function draw2(len) {
	for (var i = 0; i < len; i++) {
		console.log(" ".repeat(len - i - 1) + "*".repeat(2 * i + 1));
	}
}

draw2(4);