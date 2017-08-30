function draw() {
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
draw();