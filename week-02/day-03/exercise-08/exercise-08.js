'use strict';
// bad solution
function draw1(lineCount) {
	var midNum = Math.ceil(lineCount / 2);
	for (var i = 0; i < lineCount; i++) {
		var stars, startPoint, str, j;
		if (i < midNum) {
			stars = 2 * i + 1;
			startPoint = Math.floor(lineCount / 2) - i;
			if (lineCount % 2 === 0) startPoint = Math.floor(lineCount / 2) - i - 1;
			str = [];
			for (var k = 0; k < startPoint; k++) {
				str[k] = " ";
			}
			for (var j = startPoint; j < startPoint + stars; j++) {
				str[j] = "*";
			}
			console.log(str.join(''));
		}
		else {
			stars = (2 * midNum - 1) - 2 * (i + 1 - midNum);
			if (lineCount % 2 === 0) stars = (2 * midNum - 1) - 2 * (i - midNum);    //if line equals to even
			startPoint = i - Math.floor(lineCount / 2);
			str = [];
			for (var k = 0; k < startPoint; k++) {
				str[k] = " ";
			}
			for (var j = startPoint; j < startPoint + stars; j++) {
				str[j] = "*";
			}
			console.log(str.join(''));
		}
	}
}

function draw2(lineCount) {
	var midNum = Math.ceil(lineCount / 2);
	for (var i = 0; i < midNum; i++) {
		console.log(" ".repeat(midNum - i - 1) + "*".repeat(2 * i + 1));
	}
	i = i - 2;
	if (midNum === lineCount / 2) {
		console.log(" ".repeat(midNum - i - 2) + "*".repeat(2 * i + 3));
	}
	for (i; i >= 0; i--) {
		console.log(" ".repeat(midNum - i - 1) + "*".repeat(2 * i + 1));
	}
}
draw1(7)