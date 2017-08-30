function draw(num) {
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
draw(7);