function replaceH1(){
  var heads = document.getElementsByTagName('h1');
  for (var i = 0; i < heads.length; i++) {
    heads[i].innerText = 'Green Fox Academy Conquers the World';
  }
}