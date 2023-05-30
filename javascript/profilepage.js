const $ = selector => document.querySelector(selector);

//get all data and store to local storage if correct
const onSubmitClick = () => {
    const firstName = $('#fName').value;
    const lastName = $('#lName').value;
    const phone = $('#phone').value;
    const email = $('#email').value;
    const address = $('#address').value;
    const postcode = $('#postcode').value;
    const city = $('#city').value;
    const oldPassword = $('#oldPassword').value;
    const newPassword = $('#newPassword').value;
    const confirmPassword = $('#confirmPassword').value;

    const newUser = new User(firstName, lastName, phone, email, address, postcode, city, newPassword);

    if (validateData(newUser)) {
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        window.history.back();
        console.log('Success');
    }
}

//validate all user data
function validateData(newUser) {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    let isValid = true;
    if (newUser.firstName == "") {
        $("#FirstName").innerHTML = "First Name is Required";
        isValid = false;
    } else {
        $("#FirstName").innerHTML = "";
        isValid = true;
    }
    if (newUser.lastName == "") {
        $("#lastName").innerHTML = "Last Name is Required";
        isValid = false;
    } else {
        $("#lastName").innerHTML = "";
        isValid = true;
    }
    if (newUser.phone == "") {
        $("#pphone").innerHTML = "Phone Number is Required";
        isValid = false;
    } else if (isNaN(newUser.phone)) {
        $("#pphone").innerHTML = "Phone Number Must be in format (123)-456-789";
        isValid = false;
    } else {
        $("#pphone").innerHTML = "";
        isValid = true;
    }
    if (newUser.email == "") {
        $("#Email").innerHTML = "Email is Required";
        isValid = false;
    } else if (!emailPattern.test(newUser.email)) {
        $("#Email").innerHTML = "Email Must be in format abc@xyz.com";
        isValid = false;
    } else {
        $("#Email").innerHTML = "";
        isValid = true;
    }
    if (newUser.address == "") {
        $("#Address").innerHTML = "Address is Required";
        isValid = false;
    } else {
        $("#Address").innerHTML = "";
        isValid = true;
    }
    if (newUser.postCode == "") {
        $("#Code").innerHTML = "postcode is Required";
        isValid = false;
    } else {
        $("#Code").innerHTML = "";
        isValid = true;
    }
    if (newUser.city == "") {
        $("#City").innerHTML = "City name is Required";
        isValid = false;
    } else {
        $("#City").innerHTML = "";
        isValid = true;
    }
    return isValid;
}

//get data from storage and update profile page with data
function updateData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    $('#fName').value = currentUser.firstName;
    $('#lName').value = currentUser.lastName;
    $('#phone').value = currentUser.phone;
    $('#email').value = currentUser.email;
    $('#address').value = currentUser.address;
    $('#postcode').value = currentUser.postcode;
    $('#city').value = currentUser.city;
    $('#oldPassword').value = "*********";
    $('#newPassword').value = "*********";
    $('#confirmPassword').value = "*********";
}
document.addEventListener('DOMContentLoaded', () => {
    if (JSON.parse(localStorage.getItem('currentUser')) != null) updateData();
    $('.apply-button').addEventListener('click', onSubmitClick);
});