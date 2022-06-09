window.addEventListener('DOMContentLoaded', (event) => {
    const doctorName = localStorage.getItem('doctorName');
    localStorage.removeItem('doctorName');

    try {
        document.getElementById('doctorName').innerHTML = doctorName;
        
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
    } catch (err) {

    }
});