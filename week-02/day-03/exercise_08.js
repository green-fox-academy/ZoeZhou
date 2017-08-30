function draw(){
    for(var i=0;i<7;i++){
        var stars, startPoint, str, j;
        if(i<4){
            stars = 2*i +1;
            startPoint = 3-i;
            str = [" "," "," "," "," "," "," "];
            for(j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
        else{
            stars = 5 - (i-4)*2;
            startPoint = i-3;
            str = [" "," "," "," "," "," "," "];
            for(j=startPoint;j<startPoint+stars;j++){
                str[j] = "*";
            }
            console.log(str.join(''));
        }
    }
}
draw();