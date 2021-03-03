const servicesCards = document.querySelectorAll('.service')
const servicesDescriptions = document.querySelectorAll('.service .service-description')

for (let i = 0; i < servicesCards.length; i++) {
    const service = servicesCards[i];
    service.addEventListener('click', () => {
        service.querySelector('.service-description').classList.toggle('show-service-description')
    })
}