var ulAsteroids = document.getElementsByTagName('ul')[0];
var newLi = document.createElement('li');
newLi.innerText = 'The Green Fox';
ulAsteroids.appendChild(newLi);
newLi = document.createElement('li');
newLi.innerText = 'The Lamplighter';
ulAsteroids.appendChild(newLi);

var container = document.getElementsByClassName('container')[0];
var newEle = document.createElement('h2');
newEle.innerText = 'I can add elements to the DOM!';
container.appendChild(newEle);
newEle = document.createElement('img');
newEle.src = './Chrome.png';
container.appendChild(newEle);
