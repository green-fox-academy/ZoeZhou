var img = document.getElementsByTagName('img')[0];
console.log(img.src);
img.src = './Chrome.png';
var link = document.getElementsByTagName('a')[0];
link.href = 'https://www.greenfoxacademy.com/';
var buttons = document.getElementsByTagName('button');
buttons[1].disabled = true;
buttons[0].innerText = "Dont't click me!";