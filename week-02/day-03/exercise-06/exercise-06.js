function draw(lineCount) {
    str = [];
    for (var i = 0; i < lineCount; i++) {
        str.push("*");
        console.log(str.join(""));
    }
}
draw(4);