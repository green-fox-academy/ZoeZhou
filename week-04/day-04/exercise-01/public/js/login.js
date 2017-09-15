var myStorage = window.localStorage;
var submit = document.getElementById('submit');
submit.addEventListener('click', login);
var url = 'http://localhost:8080';

function login() {
  var username = document.getElementById('username').value.trim();
  if (username.length <= 0) {
    alert('username is empty');
    return false;
  }
  var obj = { "username": username };
  fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.userName !== 'undefined') {
      // document.cookie = `username=${result.userName}`;
      setCookie('username', result.userName);
      relocated();
    } else {
      alert('username is not exist');
      return false;
    }
    console.log(result);
  })
}

function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function relocated() {
  var tips = document.getElementsByClassName('tips')[0];
  tips.style.display = 'block';
  setInterval(function () {
    var seconds = document.getElementsByClassName('count-down')[0];
    var newSeconds = Number(seconds.innerText) - 1;
    seconds.innerText = newSeconds;
  }, 900)
  setTimeout(function () {
    window.location.href = '/index'
  }, 3000)
}