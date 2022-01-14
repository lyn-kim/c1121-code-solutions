
var currentImage = document.querySelector('.pokemon');
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var dot = document.querySelectorAll('.dot');
var imageIndex = 0;

setInterval(goForward, 3000);

function showImage() {
  currentImage.src = images[imageIndex];

  for (var i = 0; i < images.length; i++) {
    if (i === imageIndex) {
      dot[i].className = 'dot fas fa-circle';
    } else {
      dot[i].className = 'dot far fa-circle';
    }
  }
}

var next = document.querySelector('.next');
next.addEventListener('click', goForward);
function goForward() {
  imageIndex++;
  if (imageIndex >= 5) {
    imageIndex = 0;
  }
  showImage();
}

var previous = document.querySelector('.previous');
previous.addEventListener('click', goBackward);
function goBackward() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = 4;
  }
  showImage();
}
