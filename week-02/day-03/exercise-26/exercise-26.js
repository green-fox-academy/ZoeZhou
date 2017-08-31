var ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];
agRepet = ag.map(function(value){
    return value.repeat(2);
});
ag.forEach(function(value,index,array){
    array[index] = value.repeat(2);
})
console.log(agRepet);
console.log("*********************************");
console.log(ag);
