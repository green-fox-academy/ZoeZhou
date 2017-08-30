function draw(){
    for(var i=0;i<6;i++){
        if(i===0 || i===5){
            console.log("%%%%%%");
        }
        else{
            var str = "%    %";
            str = str.split('');
            str[i] = "%";
            console.log(str.join(''));
        }
    }
}
draw();