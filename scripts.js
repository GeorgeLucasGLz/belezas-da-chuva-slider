

const TOTAL_SLIDES = 8
let currentIndex = 0


const dots = document.querySelectorAll(".dots button")
const images = document.querySelectorAll(".images img")

function showSlide(index) {
    images.forEach(image => image.style.display = "none")
    dots.forEach(dot => dot.style.backgroundColor = "transparent")

    images[index].style.display = "block"
    dots[index].style.backgroundColor = "white"
}

function goToSlide(index) {
    currentIndex = (TOTAL_SLIDES + index) % TOTAL_SLIDES
    showSlide(currentIndex)
}

function next() {
    goToSlide(currentIndex + 1)
}

function prev() {
    goToSlide(currentIndex - 1)
}

function dotClicked(index) {
    goToSlide(index)
}

dots.forEach((dot, index) => {

    dot.addEventListener('click', () => dotClicked
        (index))

})


// const rains = document.querySelectorAll(".rain")
// const getRandomNumber = (min, max) =>{

//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// rains.forEach(rain => {
//     rain.style = `--rain-delay:${getRandomNumber(0, 1000)}ms`
// })



document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("videoPlayer");
    const muteButton = document.getElementById("muteButton");
  
    muteButton.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        muteButton.textContent = "🔊";
      } else {
        video.muted = true;
        muteButton.textContent = "🔇";
      }
    });
  
    // Inicie com o vídeo reproduzindo e mutado
    video.play();
    muteButton.textContent = "🔇";
  });