var ulAsteroids = document.getElementsByTagName('ul')[0];
var lists = ulAsteroids.getElementsByTagName('li');
ulAsteroids.removeChild(lists[0]);
var newLi;
for (var i = 0; i < 3; i++) {
  newLi = document.createElement('li');
  newLi.innerText = 'The Fox';
  ulAsteroids.appendChild(newLi);
}
