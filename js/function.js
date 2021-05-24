// Android Nav Menu
const menuHp = document.querySelector('.menu-hp input');
const navItem = document.querySelector('.nav-item');

menuHp.addEventListener('click', function() {
  navItem.classList.toggle('muncul');
});

// Slider
var img = document.querySelector('.slide-img');
var images = ['slide1.png', 'slide2.png', 'slide3.png'];
var x = 0;

function slide() {
  if(x < images.length) {
    x++;
  } else {
    x = 1;
  }

  img.innerHTML = `<img src="img/slide/${images[x-1]}">`
}

slide();
setInterval(slide, 8000);