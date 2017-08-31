var ai = [3, 4, 5, 6, 7];
var sum1 = ai.reduce(function(pre,next){
    return pre+next;
})
var sum2 = 0,
    sum3 = 0;
ai.forEach(function(value){
    sum2 += value;
})
ai.map(function(value){
    sum3 += value;
})
console.log(sum1);
console.log("*************************");
console.log(sum2);
console.log("*************************");
console.log(sum3);
console.log("*************************");
