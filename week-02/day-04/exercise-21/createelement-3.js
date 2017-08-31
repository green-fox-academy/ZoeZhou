var ulAsteroids = document.getElementsByClassName('asteroids')[0];
var lists = ulAsteroids.getElementsByTagName('li');
ulAsteroids.removeChild(lists[0]);
var text = ['apple', 'bubble', 'cat', 'green fox'];
var newLi;
for(var i=0;i<text.length;i++){
  newLi = document.createElement('li');
  newLi.innerText = text[i];
  ulAsteroids.appendChild(newLi);
}