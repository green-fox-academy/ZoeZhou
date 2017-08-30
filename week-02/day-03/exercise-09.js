function draw(lineCount){
    for(var i=0;i<lineCount;i++){
        if(i===0 || i===lineCount-1){
            console.log("%%%%%%");
        }
        else{
            console.log("%    %");
        }
    }
}
draw(6);