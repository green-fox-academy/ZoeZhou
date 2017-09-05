function CandyShop(candiesNum, lollypopsNum) {
  this.candiesNum = candiesNum;
  this.lollypopsNum = lollypopsNum;
  this.speedNum = Math.floor(this.lollypopsNum / 10);
  var candies = document.getElementsByClassName('candies')[0];
  var lollypops = document.getElementsByClassName('lollypops')[0];
  var speed = document.getElementsByClassName('speed')[0];

  // init
  candies.innerText = this.candiesNum;
  lollypops.innerText = '🍭'.repeat(this.lollypopsNum);
  speed.innerText = this.speedNum;

  this.createCandies = function () {
    this.candiesNum += 1;
    candies.innerText = this.candiesNum;
    this.endGame();
  };
  this.buyLollypops = function () {
    if (this.candiesNum < 100) {
      console.log(`sorry, you don't have enough candies..`);
      return false;
    } else {
      this.candiesNum -= 100;
      this.lollypopsNum += 1;
      this.speedNum = Math.floor(this.lollypopsNum / 10);
      candies.innerText = this.candiesNum;
      lollypops.innerText = '🍭'.repeat(this.lollypopsNum);
      speed.innerText = this.speedNum;
    }
  };
  this.candyMachine = function (t) {
    this.candiesNum += this.speedNum;
    candies.innerText = this.candiesNum;
    this.endGame();
  };
  this.endGame = function () {
    if (this.candiesNum > 10000) {
      alert('you win');
      window.location.reload();
    }
  };

}

var candy = new CandyShop(500, 10);
var btnCreateCandies = document.getElementsByClassName('create-candies')[0];
var btnBuyLollypops = document.getElementsByClassName('buy-lollypops')[0];
var btnCandyMachine = document.getElementsByClassName('candy-machine')[0];
btnCreateCandies.addEventListener('click', candy.createCandies.bind(candy));
btnBuyLollypops.addEventListener('click', candy.buyLollypops.bind(candy));
var t = 1000;
var timer = setInterval(candy.candyMachine.bind(candy), 1 * t);
btnCandyMachine.addEventListener('click', function () {
  clearInterval(timer);
  t /= 10;
  timer = setInterval(candy.candyMachine.bind(candy), 1 * t);
})