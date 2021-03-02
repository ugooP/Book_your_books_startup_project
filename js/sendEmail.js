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
        // Send email
        emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
        .then(() => successMsg('Email envoyé'))
    }
})

function isInputsValid(params) {
    const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (params.fromName.length < 3) {
        errorMsg('Nom trop court')
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
    console.warn(msg);
}

function successMsg(msg) {
    console.log(msg)
}