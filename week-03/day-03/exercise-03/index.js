window.addEventListener('load', init);
var url = 'https://wakeful-vision.glitch.me/api/messages';
var messagesKeeper;
function init() {
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      messagesKeeper = data.messages;
      loadPage(data.messages);
    })
  })
  var submit = document.getElementById('submit');
  submit.addEventListener('click', postInfo);
}
function loadPage(data) {
  var container = document.getElementById('container');
  container.innerHTML = '';
  for (var i = 0; i < data.length; i++) {
    var message = document.createElement('span');
    message.innerText = `${data[i].name} : ${data[i].message}`;
    container.appendChild(message);
  }
}
function postInfo() {
  var userName = document.getElementById('user-name').value.trim();
  var inputMsg = document.getElementById('input').value.trim();
  if (userName.length && inputMsg.length) {
    var request = {
      name: userName,
      message: inputMsg
    };
    fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request)
    }).then(function (response) {
      messagesKeeper.push(request);
      loadPage(messagesKeeper);
      var container = document.getElementById('container');
      container.scrollTop = container.scrollHeight;
    }).catch(function (error) {
      console.log(error);
      return;
    });
  } else {
    return;
  }
}