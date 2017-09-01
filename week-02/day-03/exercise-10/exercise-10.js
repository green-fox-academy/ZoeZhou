'use strict';
function draw(lineCount) {
	for (var i = 0; i < lineCount; i++) {
		if (i === 0 || i === lineCount - 1) {
			console.log("%".repeat(lineCount));
		}
		else {

			console.log("%" + " ".repeat(i - 1) + "%" + " ".repeat(lineCount - 2 - i) + "%");
		}
	}
}
draw(15);