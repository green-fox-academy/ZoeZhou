var paragraphs = document.getElementsByTagName('p');
if (paragraphs[2].className === 'cat') {
  alert('YEAH CAT!')
}
if (paragraphs[3].className === 'dolphin') {
  paragraphs[0].innerText = 'pear';
}
if (paragraphs[0].className === 'apple') {
  paragraphs[2].innerText = 'dog';
}

paragraphs[0].classList.add('red');
paragraphs[1].classList.remove('balloon');
