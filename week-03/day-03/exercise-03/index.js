window.addEventListener('load', init);
function init() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    'https://wakeful-vision.glitch.me/api/messages'
  );
  xhr.send();
  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        // get json
        var jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);
        loadPage(jsonData.messages);
      }
    }
  });
}

function loadPage(data) {
  var container = document.getElementById('container');
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerText = `name: ${data[i].name}, message: ${data[i].message}`;
    container.appendChild(li);
  }
}