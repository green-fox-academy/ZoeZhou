function draw(lineCount){
    var midNum = Math.ceil(lineCount/2);
    for(var i=0;i<lineCount;i++){
        var stars, startPoint, str, j;
        if(i<midNum){
            stars = 2*i +1;
            startPoint = Math.floor(lineCount/2)-i;
            if(lineCount%2===0) startPoint = Math.floor(lineCount/2)-i-1;
            str = [];
            for(var k=0;k<startPoint;k++){
                str[k] = " ";
            }
            for(var j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
        else{
            stars = (2*midNum-1) - 2*(i+1-midNum);
            if(lineCount%2===0) stars = (2*midNum-1) - 2*(i-midNum);
            startPoint = i-Math.floor(lineCount/2);
            str = [];
            for(var k=0;k<startPoint;k++){
                str[k] = " ";
            }
            for(var j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
    }
}
draw(10);