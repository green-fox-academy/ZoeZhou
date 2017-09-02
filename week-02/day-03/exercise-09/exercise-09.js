'use strict';
// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
function draw(lineCount) {
	var symbol = '%';
	for (var i = 0; i < lineCount; i++) {
		if (i === 0 || i === lineCount - 1) {
			console.log(symbol.repeat(lineCount));
		}
		else {
			console.log(symbol + " ".repeat(lineCount-2) + symbol);
		}
	}
}
draw(8);