// Rocket

// Create a Rocket class.
// It should take 3 parameters in its constructor
// 1st parameter: the type of the rocket as a string, "falcon1" or "falcon9".
// 2nd parameter: the starting fuel level as a number, defaults to 0.
// 3rd parameter: number of launches as a number, defaults to 0.
// It should have 3 methods:
// launch()
// it should use 1 fuel if it's a falcon1 and 9 fuels if it's a falcon9.
// it should increment the launches by one if it had enough fuel for the launch.
// refill()
// it should refill the rocket's fuel level to 5 if falcon1 and to 20 if falcon9.
// it should return the amount of fuel used for the refill.
// example: if the rocket is a falcon1 and has fuel level 3, then it should return 2.
// getStats()
// it should return its stats as a string like: "name: falcon9, fuel: 11, launches: 1"
function Rocket(type, fuel, launchNum) {
  if (type !== 'falcon1' && type !== 'falcon9') {
    console.log('input error!');
    return false;
  }
  this.type = type;
  if (fuel === undefined) {
    this.fuel = 0;
  } else {
    this.fuel = fuel;
  }
  if (launchNum === undefined) {
    this.launchNum = 0;
  } else {
    this.launchNum = launchNum;
  }
  this.launch = function () {
    if (this.type === 'falcon1') {
      this.fuel -= 1;
    } else {
      this.fuel -= 9;
    }
    this.launchNum += 1;
  };
  this.refill = function () {
    let amountFill;
    let usage;
    if (this.type === 'falcon1') {
      amountFill = 5;
      usage = amountFill - this.fuel;
      this.fuel = amountFill;
    } else {
      amountFill = 20;
      usage = amountFill - this.fuel;
      this.fuel = amountFill;
    }
    return usage;
  };
  this.getStats = function () {
    return `name: ${this.type}, fuel: ${this.fuel}, launches: ${this.launchNum}`;
  };
}

// SpaceX

// Create a SpaceX class.
// it should take 1 parameter in its constructor: the stored fuel
// it should have 4 methods:
// addRocket(rocket)
// it should add a new rocket to SpaceX that is given in its first parameter
// use the rockets from the fourth exercise.
// refillAll()
// it should refill all of its rockets with fuel and subtract the needed fuel from the storage
// launchAll()
// it should launch all the rockets
// buyFuel(amount)
// it should increase stored fuel by amount
// getStats()
// it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"
function SpaceX(fuel) {
  this.fuel = fuel;
  this.rockets = [];
  this.launches = 0;
  this.addRocket = function (rocket) {
    this.rockets.push(rocket);
    this.launches += rocket.launchNum;
  };
  this.refill_all = function () {
    let that = this;
    this.rockets.forEach(function (value) {
      that.fuel -= value.refill();
    })
  };
  this.launch_all = function () {
    let that = this;
    this.rockets.forEach( function (value) {
      value.launch();
      that.launches += 1;
    })
  };
  this.buy_fuel = function (amount) {
    this.fuel += amount;
  };
  this.getStats = function () {
    return `rocket: ${this.rockets.length}, fuel: ${this.fuel}, launches: ${this.launches}`;
  }
}

var falcon1 = new Rocket('falcon1')
var returned_falcon9 = new Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var space_x = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returned_falcon9 = new Rocket('falcon9', 11, 1)

console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

console.log(space_x.getStats()) // rockets: 3, fuel: 100, launches: 1
space_x.refill_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 1
space_x.launch_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 4
space_x.buy_fuel(50)
console.log(space_x.getStats()) // rockets: 3, fuel: 116, launches: 4