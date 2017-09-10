// api key: 2c38e0f789ca438f90e9274457cf26d8
'use strict';
var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=2c38e0f789ca438f90e9274457cf26d8'
var xhr = new XMLHttpRequest();
var bigImage = document.getElementById('image');
var thumbnail = document.getElementById('thumbnail');
const DISPLAY_NUM = 16;
xhr.open('get', url);
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // get json
      var picData = JSON.parse(xhr.responseText);
      displayPic(0, picData);
      displayThumbnail(picData);
    }
  }
}
// show thumbnail
function displayThumbnail(picData) {
  for (let i = 0; i < DISPLAY_NUM; i++) {
    var image = document.createElement('img');
    var imageContainer = document.createElement('span');
    imageContainer.appendChild(image);
    image.src = picData.data[i].images['480w_still'].url;
    image.setAttribute('data-image-id', picData.data[i].id);
    image.addEventListener('click', function() { playGif(bigImage, picData.data[i].id, picData) });
    image.addEventListener('mouseover', function() { mouseIn(this, picData) });
    image.addEventListener('mouseout', function() { mouseOut(this, picData) });
    thumbnail.appendChild(imageContainer);
  }
}
// show image
function displayPic(imageId, picData) {
  var bigImageContainer = document.getElementById('pic-container');
  if (imageId === 0) {
    bigImage.setAttribute('data-image-id', picData.data[0].id);
    bigImage.setAttribute('gifImage', false);
    bigImage.src = picData.data[0].images['480w_still'].url;
    return;
  }
  for (var i = 0; i < DISPLAY_NUM; i++) {
    if (picData.data[i].id === imageId) {
      bigImage.setAttribute('data-image-id', picData.data[i].id);
      bigImage.src = picData.data[i].images['480w_still'].url;
      return;
    }
  }
}
function playGif(currentImage, clickId, picData) {
  // click same pic and not gif
  if (clickId === currentImage.getAttribute('data-image-id') && currentImage.getAttribute('gifImage') === 'false') {
    for (var i = 0; i < DISPLAY_NUM; i++) {
      if (picData.data[i].id === clickId) {
        currentImage.src = picData.data[i].images['downsized_medium'].url;
        currentImage.setAttribute('gifImage', true);
        return;
      }
    }
  }
  //click same pic and already gif
  else if (clickId === currentImage.getAttribute('data-image-id') && currentImage.getAttribute('gifImage') === 'true') {
    for (var i = 0; i < DISPLAY_NUM; i++) {
      if (picData.data[i].id === clickId) {
        currentImage.src = picData.data[i].images['480w_still'].url;
        currentImage.setAttribute('gifImage', false);
        return;
      }
    }
  } else {  // click another pic
    for (var i = 0; i < DISPLAY_NUM; i++) {
      if (picData.data[i].id === clickId) {
        image.setAttribute('data-image-id', picData.data[i].id);
        currentImage.src = picData.data[i].images['480w_still'].url;
        currentImage.setAttribute('gifImage', false);
        return;
      }
    }
  }
}
function mouseIn(currentImage, picData) {
  for (var i = 0; i < DISPLAY_NUM; i++) {
    if (picData.data[i].id === currentImage.getAttribute('data-image-id')) {
      currentImage.src = picData.data[i].images['downsized_medium'].url;
      currentImage.setAttribute('gifImage', false);
      return;
    }
  }
}
function mouseOut(currentImage, picData) {
  for (var i = 0; i < DISPLAY_NUM; i++) {
    if (picData.data[i].id === currentImage.getAttribute('data-image-id')) {
      currentImage.src = picData.data[i].images['480w_still'].url;
      currentImage.setAttribute('gifImage', true);
      return;
    }
  }
}