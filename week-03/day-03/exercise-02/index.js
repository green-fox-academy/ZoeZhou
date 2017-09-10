var prevHef,
  nextHef,
  firstHef,
  lastHef;
var container = document.getElementById('book-container');
init();
function init() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10');
  xhr.send();
  xhr.addEventListener('readystatechange', function() { reloadInfo(xhr) });
  var buttonNext = document.getElementById('next');
  var buttonPrev = document.getElementById('prev');
  var buttonFirst = document.getElementById('first');
  var buttonLast = document.getElementById('last');
  buttonNext.addEventListener('click', function() { changeIndex(nextHef) });
  buttonPrev.addEventListener('click', function() { changeIndex(prevHef) });
  buttonFirst.addEventListener('click', function() { changeIndex(firstHef) });
  buttonLast.addEventListener('click', function() { changeIndex(lastHef) });
}
function showList(data) {
  data.forEach(function(value) {
    var li = document.createElement('li');
    li.innerText = value.aliases[0];
    container.appendChild(li);
  }, this);
}
function changeIndex(herf) {
  if(herf === null) {
    return;
  }
  container.innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.open('get', herf);
  xhr.send();
  xhr.addEventListener('readystatechange', function() { reloadInfo(xhr) });
}
function reloadInfo(xhr) {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // get json
      var responseHeader = xhr.getResponseHeader('link');
      getHerf(responseHeader);
      var jsonData = JSON.parse(xhr.responseText);
      showList(jsonData);
    }
  }
}
function getHerf(header){
  var arr = header.match(/https:\/\/\w+(.\w+)+/g);
  //first page
  if (arr.length === 3 && header.includes('next')) {
    prevHef = null;
    nextHef = arr[0];
    firstHef = null;
    lastHef = arr[2];
  }
  //last page
  else if(arr.length === 3 && header.includes('prev')){
    prevHef = arr[0];
    nextHef = null;
    firstHef = arr[1];
    lastHef = null;
  }
  else {
    nextHef = arr[0];
    prevHef = arr[1];
    firstHef = arr[2];
    lastHef = arr[3];
  }
}