function sum(arg){
    var sum = 0;
    for(var i=1;i<=arg;i++){
        sum += i;
    }
    return sum;
}

console.log(sum(10));