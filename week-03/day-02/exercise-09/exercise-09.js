// Click Three Times

// Create a simple HTML document with one button. 
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, 
// a text should appear under the button: 5 seconds elapsed and clicked 3 times
var i = 1;
var t = setInterval(function() { 
  console.log(i++) ;
  if(i > 5) {
    clearInterval(t);
  }
}, 1000);

setTimeout(clickThreeTimes, 5 * 1000);

function clickThreeTimes() {
  var clickCount = 0;
  var button = document.getElementById('click');
  var text = document.getElementById('text');
  button.addEventListener('click', function() {
    clickCount += 1;
    if (clickCount === 3) {
      text.style.display = 'block';
    }
  })
}

