var url = 'https://time-radish.glitch.me';
window.addEventListener('load', function () {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', sendData);
  // submit.onClick = sendData();

})


function sendData() {
  var href = document.getElementById('href');
  var title = document.getElementById('title');
  var obj = {
    title: title.value,
    href: href.value
  };
  // alert(title)
    fetch(url + '/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(function (response) {
      console.log(response);
      relocated();
    })
    href.value = '';
    title.value = '';
  }

function relocated() {
  setTimeout(function () {
    window.location.href = '../html/index.html'
  }, 3000)
}
