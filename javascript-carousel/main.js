var currentImage = document.querySelector('.pokemon');
// var currentDot = document.querySelectorAll('.dot');
// console.log('currentDot:', currentDot);
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var countIndex = 5;
setInterval(switchImage, 1000);

var imageIndex = 0;
// var dotIndex = 0;

function switchImage() {
  currentImage.src = images[imageIndex];
  imageIndex++;
  if (imageIndex === 5) {
    imageIndex = 0;
  }

  // dotIndex++;
  // if (dotIndex === 5) {
  //   dotIndex = 0;
  // }

  // if (imageIndex === dotIndex) {
  //   currentDot[dotIndex].className = 'dot active';
  // } else {
  //   currentDot[dotIndex] = 'dot';
  // }

  clearInterval(countIndex);
}

// need loop for dots
