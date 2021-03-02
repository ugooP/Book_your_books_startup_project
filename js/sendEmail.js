const nameInput = document.querySelectorAll('#contact-form input')[0]
const mailInput = document.querySelectorAll('#contact-form input')[1]
const messageArea = document.querySelector('#contact-form textarea')
const infoMsg = document.querySelector('.infoMsg')

document.querySelector('#send-mail-btn').addEventListener('click', (event) => {
    event.preventDefault()

    // Get user inputs
    const params = {
        fromName: document.querySelector('#nameInput').value,
        fromMail: document.querySelector('#emailInput').value,
        message: document.querySelector('#message').value
    }

    // Set the IDs
    const SERVICE_ID = 'service_ybm82im'
    const TEMPLATE_ID = 'template_bl9e5q7'
    const USER_ID = 'user_fKOFTHNVkZuzqNqHfz7Yw'

    // Check if inputs are valid
    if (isInputsValid(params)) {
        infoMsg.innerHTML = ''
        // Send email
        emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
        .then(() => {
            successMsg('Email envoyé')
            nameInput.value = ''
            mailInput.value = ''
            messageArea.value = ''
        })
    }
})

function isInputsValid(params) {
    const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (params.fromName.length < 3) {
        errorMsg('Nom prénom trop court')
        return false
    } else if (!emailRegexp.test(params.fromMail)) {
        errorMsg('Email invalide')
        return false
    } else if (params.message.length < 5) {
        errorMsg('Message trop court')
        return false
    } else {
        return true
    }
}

function errorMsg(msg) {
    infoMsg.innerHTML = msg
    infoMsg.style.color = 'red'
}

function successMsg(msg) {
    infoMsg.innerHTML = msg
    infoMsg.style.color = 'green'
    setTimeout(() => {
        infoMsg.innerHTML = ''
    }, 5000)
}

