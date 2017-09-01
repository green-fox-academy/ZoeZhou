var slideIndex = 1;
showSlides(slideIndex);
var thumbnailImgsContainer = document.getElementsByClassName('thumbnail-img');

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image');
  var thumbnailImgsContainer = document.getElementsByClassName('thumbnail-img-container');
  var thumbnailImgs = document.getElementsByClassName('thumbnail-img');
  // end of the slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  // start of the slides
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < thumbnailImgsContainer.length; i++) {
    thumbnailImgsContainer[i].classList.remove('active');
    thumbnailImgs[i].classList.remove('active-img');
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnailImgsContainer[slideIndex - 1].classList.add("active");
  thumbnailImgs[slideIndex - 1].classList.add("active-img");
}

