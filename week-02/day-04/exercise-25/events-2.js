var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function () {
  var sum = 0;
  var lists = document.getElementsByTagName('li');
  sum = lists.length;
  var result = document.getElementsByClassName('result')[0];
  result.innerText = result.innerText + sum;
})