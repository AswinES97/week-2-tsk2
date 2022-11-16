/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// validation
let nameError = document.getElementById("name-error")
let emailError = document.getElementById("email-error")
let msgError = document.getElementById("msg-error")
let submitError = document.getElementById("submit-error")


function validateName() {
    let name = document.getElementById("name").value
    if (name.length == 0) {
        nameError.innerHTML = "name field cannot be empty"
        return false
    }
    if (!name.match(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)) {
        nameError.innerHTML = "enter full name"
        return false
    }
    nameError.innerHTML = "valid"
    return true
}

function validateEmail() {
    let email = document.getElementById("email").value
    if (email.length == 0) {
        emailError.innerHTML = "email field cannot be empty"
        return false
    }
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        emailError.innerHTML = "enter correct mail"
        return false
    }
    emailError.innerHTML = "valid"
    return true
}

function validateText() {
    let text = document.getElementById("text").value
    if (text.length == 0) {
        msgError.innerHTML = "text field cannot be empty"
        return false
    }
    if (text.length<30) {
        msgError.innerHTML = "must be 30 characters"
        return false
    }
    msgError.innerHTML = "valid"
    return true
}

function submitForm(){
    if(!validateName()||!validateEmail()||!validateText()){
        submitError.style.display = "block"
        submitError.innerHTML = "Please fill all the fields "
        setTimeout(function (){
            submitError.style.display = "none"
        },2000)
        return false
    }
}