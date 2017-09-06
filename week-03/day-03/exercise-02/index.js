window.addEventListener('load', init);
var prevHef, 
    nextHef, 
    firstHef, 
    lastHef;
function init() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10');
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
  var buttonNext = document.getElementById('next');
  var buttonPrev = document.getElementById('prev');
  var buttonFirst = document.getElementById('first');
  var buttonLast = document.getElementById('last');
  buttonNext.addEventListener('click', function () { changeIndex(nextHef) });
  buttonPrev.addEventListener('click', function () { changeIndex(prevHef) });
  buttonFirst.addEventListener('click', function () { changeIndex(firstHef) });
  buttonLast.addEventListener('click', function () { changeIndex(lastHef) });
}
function showList(data) {
  var container = document.getElementById('book-container');
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerText = data[i].aliases[0];
    container.appendChild(li);
  }
}
function changeIndex(hef) {
  var container = document.getElementById('book-container');
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open('get', hef);
  xhr.send();
  xhr.addEventListener('readystatechange', function () { reloadInfo(xhr) });
}
function reloadInfo(xhr) {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // get json
      var responseHeader = xhr.getResponseHeader('link');
      var arr = responseHeader.match(/https:\/\/\w+(.\w+)+/g);
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
      showList(jsonData);
    }
  }
}