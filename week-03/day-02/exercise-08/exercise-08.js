// Delayed Click

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds and 
// it should show a text under the button: 2 seconds elapsed

var button = document.getElementsByTagName('button')[0];
var text = document.getElementsByTagName('span')[0];
button.addEventListener('click', toggleText);
function toggleText() {
  if (text.style.display !== 'block') {
    setTimeout(function(){
      text.style.display = 'block';
    },2 * 1000)
  } else {
    setTimeout(function(){
      text.style.display = 'none';
    },2 * 1000)
  }
}