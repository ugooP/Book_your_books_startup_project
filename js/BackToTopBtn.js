const btn = document.querySelector('.back-to-top-btn')
const carouselBounds = document.querySelector('.carousel').getBoundingClientRect()

setInterval(() => {
    // If user scroll 100px, display the button
    if (window.scrollY > 100) {
        btn.style.display = 'flex'
        btn.addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
    }
    // If user is under 100px of scroll, hide the button
    if (window.scrollY < 100) {
        btn.style.display = 'none'
    }
})