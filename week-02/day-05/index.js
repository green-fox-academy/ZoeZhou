var mockData = [
  {
    title: 'Braces are used for all control structures',
    description: `Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), 
    even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.`,
    src: './imgs/01.jpg'
  },
  {
    title: `Nonempty blocks: K&R style`,
    description: `Braces follow the Kernighan and Ritchie style (Egyptian brackets) for nonempty blocks and block-like constructs:`,
    src: './imgs/02.jpg'
  },
  {
    title: `Empty blocks: may be concise`,
    description: `An empty block or block-like construct may be closed immediately after it is opened, with no characters, space, 
    or line break in between (i.e. {}), 
    unless it is a part of a multi-block statement (one that directly contains multiple blocks: if/else or try/catch/finally).`,
    src: './imgs/03.jpg'
  },
  {
    title: `Block indentation: +2 spaces`,
    description: `Each time a new block or block-like construct is opened, the indent increases by two spaces. 
    When the block ends, the indent returns to the previous indent level. 
    The indent level applies to both code and comments throughout the block. (See the example in 4.1.2 Nonempty blocks: K&R style).`,
    src: './imgs/04.jpg'
  },
  {
    title: 'Braces are used for all control structures',
    description: `Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), 
    even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.`,
    src: './imgs/05.jpg'
  },
  {
    title: `Nonempty blocks: K&R style`,
    description: `Braces follow the Kernighan and Ritchie style (Egyptian brackets) for nonempty blocks and block-like constructs:`,
    src: './imgs/06.jpg'
  },
  {
    title: `Empty blocks: may be concise`,
    description: `An empty block or block-like construct may be closed immediately after it is opened, with no characters, space, 
    or line break in between (i.e. {}), 
    unless it is a part of a multi-block statement (one that directly contains multiple blocks: if/else or try/catch/finally).`,
    src: './imgs/07.jpg'
  },
  {
    title: `Block indentation: +2 spaces`,
    description: `Each time a new block or block-like construct is opened, the indent increases by two spaces. 
    When the block ends, the indent returns to the previous indent level. 
    The indent level applies to both code and comments throughout the block. (See the example in 4.1.2 Nonempty blocks: K&R style).`,
    src: './imgs/08.jpg'
  },
  {
    title: `Block indentation: +2 spaces`,
    description: `Each time a new block or block-like construct is opened, the indent increases by two spaces. 
    When the block ends, the indent returns to the previous indent level. 
    The indent level applies to both code and comments throughout the block. (See the example in 4.1.2 Nonempty blocks: K&R style).`,
    src: './imgs/09.jpg'
  },
  {
    title: 'Braces are used for all control structures',
    description: `Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), 
    even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.`,
    src: './imgs/10.jpg'
  },
  {
    title: `Block indentation: +2 spaces`,
    description: `Each time a new block or block-like construct is opened, the indent increases by two spaces. 
    When the block ends, the indent returns to the previous indent level. 
    The indent level applies to both code and comments throughout the block. (See the example in 4.1.2 Nonempty blocks: K&R style).`,
    src: './imgs/09.jpg'
  },
  {
    title: 'Braces are used for all control structures',
    description: `Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), 
    even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.`,
    src: './imgs/10.jpg'
  }
];
var slideIndex = 1;
var thumbnailIndex = 1;
var thumbnailImgsContainers; //span include img
var thumbnailImgs; //imgs
createImgs();
createThumbNail();
showSlides(slideIndex);

function createImgs() {
  var imgSlideContainer = document.getElementsByClassName('image-slide-container')[0]; //slideContainer
  var length = mockData.length;
  for (var i = 0; i < length; i++) {
    var imageDiv = document.createElement('div');
    var img = document.createElement('img');
    var description = document.createElement('p');
    var title = document.createElement('span');
    var prev = document.createElement('span');
    var next = document.createElement('span');
    title.innerText = mockData[i].title;
    description.appendChild(title);
    description.innerHTML += mockData[i].description;
    description.classList.add('description');
    img.src = mockData[i].src;
    imageDiv.appendChild(img);
    imageDiv.appendChild(description);
    imageDiv.classList.add('image');
    imageDiv.classList.add('hide');
    prev.innerText = '❮';
    prev.setAttribute('onClick', 'plusSlides(' + (-1) + ')');
    prev.classList.add('prev');
    next.innerText = '❯';
    next.setAttribute('onClick', 'plusSlides(' + 1 + ')');
    next.classList.add('next');
    imgSlideContainer.appendChild(imageDiv);
    imgSlideContainer.appendChild(prev);
    imgSlideContainer.appendChild(next);
  }
}

function createThumbNail() {
  var thumbnail = document.getElementsByClassName('thumbnail')[0];
  var length = mockData.length;
  var prev = document.getElementsByClassName('prev-thumbnail')[0];
  var next = document.getElementsByClassName('next-thumbnail')[0];
  for (var i = 0; i < length; i++) {
    var thumbnailImgContainer = document.createElement('span');
    var image = document.createElement('img');
    image.classList.add('thumbnail-img');
    image.src = mockData[i].src;
    image.setAttribute('onClick', 'currentSlide(' + (i + 1) + ')');
    thumbnailImgContainer.appendChild(image);
    thumbnailImgContainer.title = mockData[i].title;
    thumbnailImgContainer.classList.add('thumbnail-img-container');
    thumbnail.appendChild(thumbnailImgContainer);
  }
  showThumbnail('init');
  next.setAttribute('onClick', `scrollThubnail('next-scroll')`);
  prev.setAttribute('onClick', `scrollThubnail('prev-scroll')`);
}
function plusSlides(n) {
  showSlides(slideIndex += n, thumbnailImgsContainers);
  if (n > 0) {
    showThumbnail('next');
  } else {
    showThumbnail('prev');
  }
}
function currentSlide(n) {
  showSlides(slideIndex = n, thumbnailImgsContainers);
  showThumbnail('current', n);
}
function showSlides(n, thumbnailImgsContainers) {
  var i;
  slides = document.getElementsByClassName('image');
  thumbnailImgsContainers = document.getElementsByClassName('thumbnail-img-container');
  thumbnailImgs = document.getElementsByClassName('thumbnail-img');
  // end of the slides
  if (n > slides.length) {
    slideIndex = slides.length;
    return false;
  }
  // start of the slides
  if (n < 1) {
    slideIndex = 1;
    return false;
  }
  // show one pic
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < thumbnailImgsContainers.length; i++) {
    thumbnailImgsContainers[i].classList.remove('active');
    thumbnailImgs[i].classList.remove('active-img');
  }
  slides[slideIndex - 1].style.display = 'block';
  thumbnailImgsContainers[slideIndex - 1].classList.add('active');
  thumbnailImgs[slideIndex - 1].classList.add('active-img');
}
window.addEventListener("keydown", function (e) {
  var key = e.which || e.keyCode;
  if (key == '37') {
    plusSlides(-1);
  }
  else if (key == '39') {
    plusSlides(1);
  }
});
function showThumbnail(flag, clickIndex) {
  var thumbnailLength = mockData.length;
  thumbnailImgsContainers = thumbnailImgsContainers = document.getElementsByClassName('thumbnail-img-container');
  var showNum = 8;
  if (flag === 'next') {
    thumbnailIndex += 1;
    if (thumbnailIndex > thumbnailLength) {
      thumbnailIndex = thumbnailLength;
      return;
    }
  }
  else if (flag === 'init') {
    thumbnailIndex = 1;
  }
  else if (flag === 'prev') {
    thumbnailIndex -= 1;
    if (thumbnailIndex <= 0) {
      thumbnailIndex = 1;
      return;
    }
  }
  else if (flag === 'next-scroll') {
    if (thumbnailIndex <= showNum) {
      thumbnailIndex = showNum + 1;
    } else {
      thumbnailIndex += 1;
      if (thumbnailIndex > thumbnailLength) {
        thumbnailIndex = thumbnailLength;
        return;
      }
    }
  } else if (flag === 'prev-scroll') {
    thumbnailIndex -= 1;
    if (thumbnailIndex <= 0) {
      thumbnailIndex = 8;
      return;
    }
  } else {
    //a bug here
    thumbnailIndex = clickIndex;
  }
  if (thumbnailIndex < showNum) {
    for (var i = 0; i < thumbnailLength; i++) {
      if (i < showNum) {
        thumbnailImgsContainers[i].style.display = 'inline-block';
        continue;
      } else {
        thumbnailImgsContainers[i].style.display = 'none';
      }
    }
  } else {
    for (var i = 0; i < thumbnailLength; i++) {
      if (i < thumbnailIndex - showNum) {
        thumbnailImgsContainers[i].style.display = 'none';
      }
      else if (i < thumbnailIndex) {
        thumbnailImgsContainers[i].style.display = 'inline-block';
      }
      else {
        thumbnailImgsContainers[i].style.display = 'none';
      }
    }
  }
}
function scrollThubnail(flag) {
  showThumbnail(flag);
}


