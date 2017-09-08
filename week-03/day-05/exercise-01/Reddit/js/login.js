var myStorage = window.localStorage;
var submit = document.getElementById('submit');
submit.addEventListener('click', login);

function login() {
  var username = document.getElementById('username').value.trim();
  if (username.length <= 0) {
    alert('username is empty');
    return false;
  }
  myStorage.setItem('username', username);
  console.log(username);
  relocated();
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
    window.location.href = '../html/index.html'
  }, 3000)
}