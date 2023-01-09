// definir las imagenes

const images = [
    'IMAGENES/img1.jpg',
    'IMAGENES/img2.jpg',
    'IMAGENES/img3.jpg',
]

// aplicacion de estado

let index = 0;
const max = images.length;


// Get el DOM  de los elementos

const containerElement = document.querySelector('.container');
const prevSlideButtom = document.querySelector('.prevSlide');
const nextSlideButtom = document.querySelector('.nextSlide');

// click evento

prevSlideButtom.addEventListener('click', function() {
    index--

   setImageIndex ()
   changeBackgroundImage (images[index], containerElement)

});

nextSlideButtom.addEventListener('click', function() {
    index--

   setImageIndex ()
   changeBackgroundImage (images[index], containerElement)

});

function setImageIndex (){
    if (index < 0) index = max -1;
    if (index === max) index = 0;
}

function changeBackgroundImage (backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`
}