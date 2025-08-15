//SIGNUP FORM CONTROLLER

//GLOBAL VARIABLES
const pwd1 = document.querySelector("#password_one");
const pwd2 = document.querySelector("#password_two");
const pwdFormatMessage = document.querySelector(".pwd_format")
const pwdInputs = document.querySelectorAll(".pwd_input")



//EVENT LISTENERS
pwdInputs.forEach( e => {
    e.addEventListener('focus', () => {
        pwdFormatMessage.style.visibility = 'visible';
    });
    e.addEventListener('blur', () => {
        pwdFormatMessage.style.visibility = 'hidden';
        if (!pwd1.value && !pwd2.value) {
            pwd2.disable = true;
            pwd1.style.borderColor = 'black';
            pwd2.style.borderColor = 'black';
        } else if (pwd1.value && !pwd2.value) {
            pwd2.style.borderColor = 'black';
        }
    });
});

pwd2.addEventListener('input', () => {
    if (pwd1.value === pwd2.value) {
        pwd1.style.borderColor = 'green';
        pwd2.style.borderColor = 'green';
    } else {
        pwd1.style.borderColor = 'green';
        pwd2.style.borderColor = 'red';        
    };
});

//Stop user from filling out password confirmation until first entry is valid
pwd1.addEventListener('input', () => {
    if (pwd1.checkValidity()) {
        pwd1.style.borderColor = 'green';
        pwd2.disabled = false;
        pwd2.style.opacity = '1';
    } else {
        pwd1.style.borderColor = 'red';
        pwd2.disabled = true;
        pwd2.style.opacity = '0.1';
    }
});




