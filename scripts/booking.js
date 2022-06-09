function load_confirmation(elem) {
    const email = document.getElementById("emailInput").value;
    localStorage.setItem('email', email);
}