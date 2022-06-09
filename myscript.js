function load_profile(elem) {
    console.log(elem.parentElement.parentElement.parentElement.parentElement.id);
    const doctorName = elem.parentElement.parentElement.parentElement.parentElement.id;
    localStorage.setItem('doctorName', doctorName);
}

window.addEventListener('DOMContentLoaded', (event) => {
    const doctorName = localStorage.getItem('doctorName');
    document.getElementById('doctorName').text = doctorName;

    switch (doctorName) {
        case "John Doe":
            document.getElementById('doctorProfileImage').src = "assets/rick.jpg";
            break;
        case "Jane Doe":
            document.getElementById('doctorProfileImage').src = "assets/michelle.jpg";
            break;
        case "Jackson Doe":
            document.getElementById('doctorProfileImage').src = "assets/justin.jpg";
            break;
        case "Janice Doe":
            document.getElementById('doctorProfileImage').src = "assets/carol.jpg";
    }
});