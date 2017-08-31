var king = document.getElementById('b325');
var conceited = document.getElementsByClassName('b326')[0];
var businessLamp = document.getElementsByClassName('big');
for (var i = 0; i < businessLamp.length; i++){
  alert(businessLamp[i].innerHTML);
}
var conceitedKing = document.getElementsByClassName('container')[0].getElementsByTagName('div');
for (var i = 0; i < conceitedKing.length; i++){
  alert(conceitedKing[i].innerHTML);
}
var noBusiness = document.getElementsByTagName('div');
for (var i = 0; i < noBusiness.length; i++){
  console.log(noBusiness[i].innerHTML);
}
var allBizniss = document.getElementsByTagName('p')[0];
alert(allBizniss.innerHTML);