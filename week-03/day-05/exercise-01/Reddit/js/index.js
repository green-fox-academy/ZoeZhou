'use strict'
window.addEventListener('load', init);
var mock =
  [
    { "title": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.", "href": "https://mapquest.com" },
    { "title": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.", "href": "http://dmoz.org" },
    { "title": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "href": "https://goodreads.com" },
    { "title": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "href": "https://quantcast.com" },
    { "title": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.", "href": "http://un.org" },

  ]

var url = 'https://time-radish.glitch.me';
var messageKeeper = null;
function init() {
  // postUpvote(77);
  // postInfo(mock);
  // deleteInfo();
  fetch(url + '/posts').then(function (response) {
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
  data.forEach(function (value, index) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('container');
    var count = document.createElement('div');
    count.classList.add('count');
    count.innerHTML = index + 1;
    var contentLeft = document.createElement('div');
    contentLeft.classList.add('content-left');
    var imageUp = document.createElement('img');
    imageUp.classList.add('upvote');
    imageUp.classList.add('vote-img');
    imageUp.src = '../imgs/upvote.png';
    imageUp.addEventListener('click', changeVote);
    var voteText = document.createElement('span');
    voteText.innerText = value.score;
    var imageDown = document.createElement('img');
    imageDown.classList.add('downvote');
    imageDown.classList.add('vote-img');
    imageDown.src = '../imgs/downvote.png';
    imageDown.addEventListener('click', changeVote);
    var contentRight = document.createElement('div');
    contentRight.classList.add('content-right');
    var title = document.createElement('span');
    title.classList.add('title');
    title.innerHTML = value.title;
    var submitTime = document.createElement('span');
    submitTime.classList.add('submit-time');
    var submitTimeTxt = new Date().getTime() - value.timestamp;
    submitTimeTxt = formatTime(submitTimeTxt);
    submitTime.innerHTML = `submitted ${submitTimeTxt} ago by ${value.owner || 'anonymous'}`;
    var change = document.createElement('span');
    change.classList.add('change');
    var modify = document.createElement('a');
    modify.href = './modify.html';
    modify.innerHTML = 'modify';
    var remove = document.createElement('a');
    remove.href = '#';
    remove.innerHTML = 'remove';
    contentLeft.appendChild(imageUp);
    contentLeft.appendChild(voteText);
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
function changeVote() {
  var target = event.currentTarget;
  var picUp = event.path[1].children[0];
  var picDown = event.path[1].children[2];
  var vote = event.path[1].children[1];
  var voteText = Number(vote.innerText);
  if (target.classList.contains('upvote')) {
    if (votedOrNot(picUp, picDown) === 'downvoted') {
      voteText += 2;
    } else {
      voteText += 1;
    }
    vote.classList.add('downvoted-color');
    target.classList.remove('upvote');
    target.classList.add('upvoted');
    target.src = '../imgs/upvoted.png';
    picDown.classList.remove('downvoted');
    picDown.classList.add('downvote');
    picDown.src = '../imgs/downvote.png';
  }
  else if (target.classList.contains('downvote')) {
    if (votedOrNot(picUp, picDown) === 'upvoted') {
      voteText -= 2;
    } else {
      voteText -= 1;
    }
    vote.classList.add('downvoted-color');
    target.classList.remove('downvote');
    target.classList.add('downvoted');
    target.src = '../imgs/downvoted.png';
    picUp.classList.remove('upvoted');
    picUp.classList.add('upvote');
    picUp.src = '../imgs/upvote.png';
  }
  else if (target.classList.contains('upvoted')) {
    vote.classList.remove('downvoted-color');
    target.classList.remove('upvoted');
    target.classList.add('upvote');
    target.src = '../imgs/upvote.png';
    voteText -= 1;
  }
  else {
    vote.classList.remove('downvoted-color');
    target.classList.remove('downvoted');
    target.classList.add('downvote');
    target.src = '../imgs/downvote.png';
    voteText += 1;
  }
  // console.log(`after: ${voteText}`);
  vote.innerText = voteText;
}
function votedOrNot(picUp, picDown) {
  if (picDown.classList.contains('downvoted')) {
    return 'downvoted';
  }
  else if (picUp.classList.contains('upvoted')) {
    return 'upvoted';
  } else {
    return 'notvote'
  }
}
function postInfo(request) {
  let request = request;
  request.forEach(function (value) {
    fetch(url + '/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }).then(function (response) {
      console.log('success');
    })
  })
}
function deleteInfo(id) {
  for (var id = 109; id <= 122; id++) {
    fetch(url + '/posts/' + id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (response) {
      console.log('success');
    })
  }
}
function postUpvote(id) {
  fetch(url + `posts/${id}/upvote`, {
    method: 'put',
    headers: {
      'Accept': 'application/json'
    }
  })
}