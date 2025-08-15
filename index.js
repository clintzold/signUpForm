const pwd1 = document.querySelector("#password_one");
const pwd2 = document.querySelector("#password_two");
const pwdFormatMessage = document.querySelector(".pwd_format")
const pwdInputs = document.querySelectorAll(".pwd_input")

pwdInputs.forEach( e => {
    e.addEventListener('focus', () => {
        pwdFormatMessage.style.visibility = 'visible';
    });
    e.addEventListener('blur', () => {
        pwdFormatMessage.style.visibility = 'hidden';
    });
});

console.log(pwdInputs)