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
	for (var i = 0; i < lineCount; i++) {
		if (i === 0 || i === lineCount - 1) {
			console.log("%%%%%%");
		}
		else {
			console.log("%    %");
		}
	}
}
draw(6);