var abc = ["Arthur", "Boe", "Chloe"];
var temp = abc[0];
abc[0] = abc[2];
abc[2] = temp;
console.log(abc);