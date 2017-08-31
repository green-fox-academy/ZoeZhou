function printEven(num){
    var res = [];
    for(var i=0; i<num; i++){
        if((i+1)%2===0){
            res.push(i+1);
        }
    }
    console.log(res);
}
printEven(500);