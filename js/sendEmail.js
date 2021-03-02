function sendEmail() {
    event.preventDefault()

    // Get user inputs
    const params = {
        fromName: document.querySelector('#from-name').value,
        fromMail: document.querySelector('#from-mail').value,
        message: document.querySelector('#message').value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    }

    fetch('/', options).then(() => console.log('Email envoyé'))
}

function isInputsValid(params) {
    const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (params.fromName.length < 3) {
        errorMsg('Nom trop court')
        return false
    } else if (!emailRegexp.test(params.fromMail)) {
        errorMsg('Email invalide');
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