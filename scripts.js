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


