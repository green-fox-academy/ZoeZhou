'use strict';
// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg
function PirateHorde(pirates) {
  this.pirates = pirates;
  this.addPirate = function (name, gold, hasWoodenLeg) {
    var obj = {
      name: name,
      gold: gold,
      hasWoodenLeg: hasWoodenLeg
    };
    this.pirates.push(obj);
  };
  this.getSumGold = function () {
    var sumOfGold = 0;
    this.pirates.forEach(function (value) {
      sumOfGold += value.gold;
    })
    return sumOfGold;
  };
  this.getLongestName = function () {
    var longest = 0;
    var indexOut = 0;
    this.pirates.forEach(function (value, indexIn) {
      if (value.name.length > longest) {
        longest = value.name.length;
        indexOut = indexIn;
      }
    })
    return this.pirates[indexOut].name;
  };
  this.getTheWoodenLegNames = function () {
    var woodenLegArray = this.pirates.filter(function (value) {
      return value.hasWoodenLeg === true;
    })
    var names = [];
    woodenLegArray.forEach(function (value) {
      names.push(value.name);
    })
    return names;
  };
}


var pirates = [
  { name: 'Jack', gold: 4, hasWoodenLeg: true },
  { name: 'Bob', gold: 0, hasWoodenLeg: false },
  { name: 'Olaf', gold: 3, hasWoodenLeg: true },
  { name: 'Steve', gold: 2, hasWoodenLeg: true },
  { name: 'Ian', gold: 10, hasWoodenLeg: false },
];

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']