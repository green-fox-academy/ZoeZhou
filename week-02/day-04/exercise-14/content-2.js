var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length - 1; i++) {
  paragraphs[i].innerText = paragraphs[paragraphs.length-1].innerText;
}