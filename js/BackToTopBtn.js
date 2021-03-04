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
    // If user scroll to bottom of the page, don't let the btn go over the footer
    const windowBottom = Math.round(document.querySelector('body').getBoundingClientRect().bottom)
    const viewportHeight = $(window).height()
    const footerHeight = document.querySelector('footer').getBoundingClientRect().height

    if (windowBottom < (viewportHeight + footerHeight)) {
        btn.style.position = 'absolute'
        btn.style.bottom = `${(footerHeight + 30).toString()}px`
    } else {
        btn.style.position = 'fixed'
        btn.style.bottom = '30px'
    }
})
