const carousel = document.querySelector('.carousel')
const slides = document.querySelectorAll('.carousel-item')
const dots = document.querySelectorAll('.dots-container a')
const nextSlideBtn = document.querySelector('.next-slide')
const prevSlideBtn = document.querySelector('.prev-slide')

nextSlideBtn.addEventListener('click', () => {
    const slideWidth = carousel.getBoundingClientRect().width
    const index = getActiveSlide()
    const toScroll = (index + 1) * slideWidth

    if (index < slides.length - 1) {
        carousel.scroll({
            top: 0,
            left: toScroll,
            behavior: 'smooth'
        })
        updateActiveDot(index+1)
    } else {
        carousel.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        updateActiveDot(0)
    }
})

prevSlideBtn.addEventListener('click', () => {
    const slideWidth = carousel.getBoundingClientRect().width
    const index = getActiveSlide()
    const toScroll = (index - 1) * slideWidth

    if (index > 0) {
        carousel.scroll({
            top: 0,
            left: toScroll,
            behavior: 'smooth'
        })
        updateActiveDot(index-1)
    } else {
        carousel.scroll({
            top: 0,
            left: slides.length * slideWidth,
            behavior: 'smooth'
        })
        updateActiveDot(slides.length-1)
    }
})


function getActiveSlide() {
    for (let i = 0; i < slides.length; i++) {
        const bounds = slides[i].getBoundingClientRect();
        if (bounds.x < 1 && bounds.x > -1) {
            return i
        }
    }
}

function updateActiveDot(n) {
    // Remove the previous active dot
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active')
            break
        }
    }

    dots[n].classList.add('active')
}

function goToSlide(n) {
    const slideWidth = carousel.getBoundingClientRect().width

    carousel.scroll({
        top: 0,
        left: n * slideWidth,
        behavior: 'smooth'
    })
    updateActiveDot(n)
}