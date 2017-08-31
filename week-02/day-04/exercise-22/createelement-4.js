var ulAsteroids = document.getElementsByClassName('asteroids')[0];
var lists = ulAsteroids.getElementsByTagName('li');
ulAsteroids.removeChild(lists[0]);
var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
];
var newLi;
var len = planetData.length;
for(var i=0;i<len;i++){
  newLi = document.createElement('li');
  newLi.className = planetData[i].category;
  newLi.innerText = planetData[i].content + '\nasteroid: ' + planetData[i].asteroid;
  ulAsteroids.appendChild(newLi);
}