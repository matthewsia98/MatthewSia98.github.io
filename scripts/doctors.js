function load_profile(elem) {
    const doctorName = elem.parentElement.parentElement.parentElement.parentElement.id;
    localStorage.setItem('doctorName', doctorName);
}