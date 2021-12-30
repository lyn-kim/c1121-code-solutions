
var currentImage = document.querySelector('.pokemon');
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imageIndex = 0;

var dot = document.querySelectorAll('.dot');
var dotIndex = 0;

var countIndex = 5;

var previous = document.querySelector('.previous');
previous.addEventListener('click', goToPrevImage);
function goToPrevImage(event) {
  currentImage.src = images[imageIndex--];
  if (imageIndex < 0) {
    imageIndex = 4;
  }
}

var next = document.querySelector('.next');
next.addEventListener('click', goToNextImage);
function goToNextImage(event) {
  currentImage.src = images[imageIndex++];
  if (imageIndex >= 5 || imageIndex <= 0) {
    imageIndex = 0;
  }
}

function showImage() {
  currentImage.src = images[imageIndex];
  imageIndex++;
  if (imageIndex === 5) {
    imageIndex = 0;
  }

  // for-loop for dots
  dotIndex++;
  for (var i = 0; i < dot.length; i++) {
    if (i === dotIndex) {
      dot[i].className = 'dot active';
      dot[i - 1].className = 'dot';
      if (dotIndex > dot.length) {
        dotIndex = 0;
      }
    }
  }

  clearInterval(countIndex);
}

// function skipToImg(index) {
//   dot[index].className = 'dot active';
//   currentImage.src = images[index];
//   dot[index].className = 'dot';
// }

setInterval(showImage, 3000);
showImage(imageIndex);
