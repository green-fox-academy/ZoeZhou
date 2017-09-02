'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ['Eve','Ashley','Bözsi','Kat','Jane'];
var boys = ['Joe','Fred','Béla','Todd','Neef','Jeff'];
var order = [];

var len = girls.length + boys.length;
for(var i = 0; i < len; i++){
  if(i % 2 === 0 && girls.length > 0){
    order.push(girls.shift());
  }else{
    order.push(boys.shift());
  }
}

console.log(order);