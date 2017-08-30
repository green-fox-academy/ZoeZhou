function printEven(){
    var res = [];
    for(var i=0; i<500; i++){
        if((i+1)%2===0){
            res.push(i+1);
        }
    }
    console.log(res);
}
printEven();