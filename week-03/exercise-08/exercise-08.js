// Create an Animal constructor

// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
function Animal(hunger, thirst) {
  this.hunger = 50;
  this.thirst = 50;
  this.eat = function () {
    this.hunger -= 1;
  };
  this.drink = function () {
    this.thirst -= 1;
  };
  this.play = function () {
    this.hunger -= 1;
    this.thirst -= 1;
  }
}
var cat = new Animal();
console.log(cat.hunger);
console.log(cat.thirst);
cat.play();
console.log(cat.hunger);
console.log(cat.thirst);


// Create a Farm constructor

// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal
function Farm(list, slots) {
  this.list = list;
  this.slots = slots;
  this.breed = function (breed) {
    if (this.slots > 1) {
      this.list.push(breed);
      this.slots -= 1;
    } else {
      console.log('there is no place!');
      return false;
    }
  };
  this.slaughter = function () {
    this.list.pop();
    this.slots += 1;
  };
}

var list = [
  'dog',
  'sheep',
  'duck'
];
var myFarm = new Farm(list, 10);
console.log(myFarm.list);
console.log(myFarm.slots);
myFarm.breed('pig');
console.log(myFarm.list);
console.log(myFarm.slots);
myFarm.slaughter();
console.log(myFarm.list);
console.log(myFarm.slots);