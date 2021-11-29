function checkValidation(e) {
    //1. check username
    let i = 0;

    let username = document.getElementById('userName');
    let usernameValue = document.querySelectorAll('.main__formInput')[0].value;
    let alertText1 = document.querySelectorAll('.main__formAlert')[0];
    let checkUserName = /[a-z0-9]{3,30}/i;
    if (checkUserName.test(usernameValue)) {
        username.classList.add('valid');
        username.classList.remove('invalid');
        alertText1.style.opacity = '0';
        i++;
    } else {
        username.classList.add('invalid');
        username.classList.remove('valid');
        alertText1.style.opacity = '100%';
    }
    username.addEventListener("blur",checkValidation);

    //2. check email

    let email = document.getElementById('email');
    let alertText2 = document.querySelectorAll('.main__formAlert')[1];
    let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
    if (checkEmail.test(email.value)) {
        email.classList.add('valid');
        email.classList.remove('invalid');
        alertText2.style.opacity = '0';
        i++;
    } else {
        email.classList.add('invalid');
        email.classList.remove('valid');
        alertText2.style.opacity = '100%';
    }
    email.addEventListener("blur",checkValidation);

    //3. check password

    let password = document.getElementById('passWord');
    let alertText3 = document.querySelectorAll('.main__formAlert')[2];
    let checkPass = /[a-z0-9]{6,25}/
    if (checkPass.test(password.value)) {
        password.classList.add('valid');
        password.classList.remove('invalid');
        alertText3.style.opacity = '0';
        i++;
    } else {
        password.classList.add('invalid');
        password.classList.remove('valid');
        alertText3.style.opacity = '100%';
    }
    password.addEventListener("blur",checkValidation);

    //4. check confirm

    let confirmPass = document.getElementById('confirm');
    let alertText4 = document.querySelectorAll('.main__formAlert')[3];
    if (confirmPass.value === password.value && checkPass.test(confirmPass.value)){
        confirmPass.classList.add('valid');
        confirmPass.classList.remove('invalid');
        alertText4.style.opacity = '0';
        i++;
    }else {
        confirmPass.classList.add('invalid')
        confirmPass.classList.remove('valid');
        alertText4.style.opacity = '100%';
        confirmPass.value = "";
    }
    if (i === 4){
        document.getElementsByTagName("form")[0].removeAttribute("onsubmit");
    }
    confirmPass.addEventListener("blur",checkValidation);
}