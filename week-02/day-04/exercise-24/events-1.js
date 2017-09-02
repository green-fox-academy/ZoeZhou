var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function (event) {
  this.classList.toggle('party');
})