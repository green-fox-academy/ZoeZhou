window.addEventListener('load', init);
var nextHef;
var firstHef;
var lastHef;


function init() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10'
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
  var buttonNext = document.getElementById('next');
  var buttonPrev = document.getElementById('prev');
  var buttonFirst = document.getElementById('first');
  var buttonLast = document.getElementById('last');
  buttonNext.addEventListener('click', getNext);
  buttonPrev.addEventListener('click', getPrev);
  buttonFirst.addEventListener('click', getFirst);
  buttonLast.addEventListener('click', getLast);
}
function showList(data) {
  var container = document.getElementById('book-container');
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerText = data[i].aliases[0];
    container.appendChild(li);
  }
}
function getNext() {
  var container = document.getElementById('book-container');
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  // console.log(nextHef)
  xhr.open(
    'get',
    nextHef
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
}
function getPrev() {
  var container = document.getElementById('book-container');
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    prevHef
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
}
function getFirst() {
  var container = document.getElementById('book-container');
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    firstHef
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
}
function getLast() {
  var container = document.getElementById('book-container');
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    lastHef
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
}
function reloadInfo(xhr) {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // get json
      var responseHeader = xhr.getResponseHeader('link');
      var arr = responseHeader.match(/https:\/\/\w+(.\w+)+/g);
      // console.log(responseHeader);
      // console.log(arr);
      if (arr.length === 3) {
        prevHef = arr[1];
        nextHef = arr[0];
        firstHef = arr[1];
        lastHef = arr[2];
      }
      else {
        nextHef = arr[0];
        prevHef = arr[1];
        firstHef = arr[2];
        lastHef = arr[3];
      }
      var jsonData = JSON.parse(xhr.responseText);
      // console.log(jsonData);
      // console.log(jsonData.length);
      showList(jsonData);
    }
  }
}