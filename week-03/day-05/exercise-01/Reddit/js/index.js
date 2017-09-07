'use strict'
window.addEventListener('load', init);
var url = 'https://time-radish.glitch.me/posts';
var messageKeeper = null;
function init() {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    messageKeeper = data.posts;
    loadPage(messageKeeper);
    console.log(messageKeeper);
  })
}
function loadPage(data) {
  var allMessages = document.getElementById('mainContent');
  // allMessages.innerHTML = '';
  data.forEach(function (value) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('container');
    var count = document.createElement('div');
    count.classList.add('count');
    count.innerHTML = Number(value.id) + 1;
    var contentLeft = document.createElement('div');
    contentLeft.classList.add('content-left');
    var imageUp = document.createElement('img');
    imageUp.classList.add('upvote');
    imageUp.classList.add('vote-img');
    imageUp.src = '../imgs/upvote.png';
    var voteNum = document.createElement('span');
    voteNum.innerText = value.score;
    var imageDown = document.createElement('img');
    imageDown.classList.add('downvote');
    imageDown.classList.add('vote-img');
    imageDown.src = '../imgs/downvote.png';
    var contentRight = document.createElement('div');
    contentRight.classList.add('content-right');
    var title = document.createElement('span');
    title.classList.add('title');
    title.innerHTML = value.title;
    var submitTime = document.createElement('span');
    submitTime.classList.add('submit-time');
    var submitTimeTxt = new Date().getTime() - value.timestamp;
    submitTimeTxt = formatTime(submitTimeTxt);
    submitTime.innerHTML = `submitted ${submitTimeTxt} ago by ${value.owner||'anonymous'}`;
    var change = document.createElement('span');
    change.classList.add('change');
    var modify = document.createElement('a');
    modify.href = './modify.html';
    modify.innerHTML = 'modify';
    var remove = document.createElement('a');
    remove.href = '#';
    remove.innerHTML = 'remove';
    contentLeft.appendChild(imageUp);
    contentLeft.appendChild(voteNum);
    contentLeft.appendChild(imageDown);
    change.appendChild(modify);
    change.appendChild(remove);
    contentRight.appendChild(title);
    contentRight.appendChild(submitTime);
    contentRight.appendChild(change);
    messageContainer.appendChild(count);
    messageContainer.appendChild(contentLeft);
    messageContainer.appendChild(contentRight);
    allMessages.appendChild(messageContainer);
  })
}
function formatTime(seconds) {
  var theSecond = parseInt(seconds);
  var theMinute = 0;
  var theHour = 0;
  if (theSecond > 60) {
    theMinute = parseInt(theSecond / 60);
    theSecond = parseInt(theSecond % 60);

    if (theMinute > 60) {
      theHour = parseInt(theMinute / 60);
      theMinute = parseInt(theMinute % 60);
    }
  }
  var result = "" + parseInt(theSecond) + " seconds ";
  if (theMinute > 0) {
    result = "" + parseInt(theMinute) + " minutes " + result;
  }
  if (theHour > 0) {
    result = "" + parseInt(theHour) + " hours " + result;
  }
  return result;
}