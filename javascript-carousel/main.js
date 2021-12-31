
var currentImage = document.querySelector('.pokemon');
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imageIndex = 0;

var dot = document.querySelectorAll('.dot');
// var dotIndex = 0;

var countIndex = 5;

var previous = document.querySelector('.previous');
previous.addEventListener('click', goToPrevImage);
function goToPrevImage(event) {
  currentImage.src = images[imageIndex--];
  if (imageIndex < 0) {
    imageIndex = 4;
  }
  // add increment/decrement here?
}

var next = document.querySelector('.next');
next.addEventListener('click', goToNextImage);
function goToNextImage(event) {
  currentImage.src = images[imageIndex++];
  if (imageIndex >= 5 || imageIndex <= 0) {
    imageIndex = 0;
  }
  // add increment/decrement here?
}

function showImage() {
  // this line underneath should go somewhere below the codeblock
  currentImage.src = images[imageIndex];
  imageIndex++;
  if (imageIndex === 5) {
    imageIndex = 0;
  }

  // for-loop for dots
  for (var i = 0; i < dot.length; i++) {
    if (i === imageIndex) {
      dot[i].className = 'dot fas fa-circle';
    } else {
      dot[i].className = 'dot far fa-circle';
    }
    // if (dotIndex > dot.length) {
    //   dotIndex = 0;
    //   dotIndex++;
    // }
  }

  clearInterval(countIndex);
}

function skipToImg(event) {
  var index = event.target.getAttribute('data-image');
  dot[index].className = 'dot fas fa-circle';
  currentImage.src = images[index];
}

var $dotContainer = document.querySelector('.dot-container');
$dotContainer.addEventListener('click', skipToImg);

setInterval(showImage, 1000);
// showImage(imageIndex);
