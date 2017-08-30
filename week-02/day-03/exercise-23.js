var s = [1, 2, 3, 8, 5, 6];
s = s.map(function(value,index,array){
    if(index === 3){
        return 4;
    }
});
console.log(s[3]);