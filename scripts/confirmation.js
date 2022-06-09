window.addEventListener('DOMContentLoaded', (event) => {
    const email = localStorage.getItem('email');
    localStorage.removeItem('email');

    try {
        document.getElementById('emailConfirmation').innerHTML = "A confirmation email has been sent to " + 
            "<b>" + email + "</b>"
            "<br>You should receive it within 1-5 minutes";
    } catch (err) {

    }
});