'use strict';
function draw1(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		for (var j = 0; j < num; j++) {
			if (!arr[i]) arr[i] = [];
			arr[i][j] = 0;
			if (j === num - 1 - i) {
				arr[i][j] = 1;
			}
		}
	}
	arr.map(function (value, index) {
		console.log(arr[index]);
	})
}

function draw2(num) {
	for (var i = 0; i < num; i++) {
		var line = new Array(num).fill(0);
		line[num - 1 - i] = 1;
		console.log(line.join(' '));
	}
}

draw2(10);