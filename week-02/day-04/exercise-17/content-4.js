var replaceList = ['apple', 'banana', 'cat', 'dog'];
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].innerText = replaceList[i];
}