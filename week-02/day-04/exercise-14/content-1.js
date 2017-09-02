alert(document.getElementsByTagName('h1')[0].innerText  );
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0].innerText);
alert(paragraphs[1].innerText);
document.getElementsByTagName('h1')[0].innerText = 'New content';
paragraphs[2].innerText = paragraphs[0].innerText;