const descriptions = $('.service-description')

/* for (let i = 0; i < $('.service').length; i++) {
    $('.service')[i].addEventListener('click', () => {
        $('.service-description')[i].slideToggle()
    })
} */

$('.service1').click(() => $('.description1').slideToggle())
$('.service2').click(() => $('.description2').slideToggle())
$('.service3').click(() => $('.description3').slideToggle())