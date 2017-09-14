var currentUrl = window.location.search;
var url = 'http://localhost:8080';
var idContent = currentUrl.match(/id=\d+/)[0].split("=")[1];
var hrefContent = currentUrl.match(/href=\w*/)[0].split("=")[1];
var titleContent = currentUrl.match(/title=.+/)[0].split("=")[1];
if (hrefContent === 'undefined') {
  hrefContent = ' ';
}
idContent = decodeURI(idContent);
hrefContent = decodeURI(hrefContent);
titleContent = decodeURI(titleContent);

var href = document.getElementById('href');
var title = document.getElementById('title');
var submit = document.getElementById('submit');
submit.addEventListener('click', modify);
autoFill();

function autoFill() {
  var id = document.getElementById('idNum');

  id.innerText = '# ' + idContent;
  href.value = hrefContent;
  title.value = titleContent;
}
function modify() {
  var content = {
    title: null,
    href: null
  };
  content.href = href.value;
  content.title = title.value.trim();
  if (content.title.length <= 0) {
    alert('title is empty!');
    return false;
  }
  fetch(`${url}/posts/${idContent}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  }).then(function (response) {
    console.log(response);
    relocated();
  })
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
