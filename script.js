
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (userNameValue === '') {
        setErrorFor(userName, 'user name cannat be blank')
    } else {
        setSuccessFor(userName)
    }
    if (email === '') {
        setErrorFor(email, 'email cannat be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'email is not valid')
    }
     else {
        setSuccessFor(email)
    }


    if (passwordValue === '') {
        setErrorFor(password, 'password cannat be blank')
    } else if(!passwordCheck(passwordValue)){
        setErrorFor(password, 'password should be at least 8 char such(A-Za-z1-9%^&) ')

    }
    else {
        setSuccessFor(password)
    }
    if (password2Value === '') {
        setErrorFor(password2, 'password2 cannat be blank')
    } else if (password2Value!==passwordValue){
        setErrorFor(password2, 'passwords should be match')
    }
    else {
        setSuccessFor(password2)
    }
};
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}
function setSuccessFor(input){
    const formControll = input.parentElement;
    formControll.className = 'form-control success'
}
function isEmail(email){
    return /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email)
}
function passwordCheck(pass){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[%^&#!^*&]).{8,}$/.test(pass);
}