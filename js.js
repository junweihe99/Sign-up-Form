const password = document.querySelector('#password');
const confirm_passsword = document.querySelector('#confirm_password');

function validatePassword(){
    if(password.value != confirm_passsword.value){
        confirm_passsword.setCustomValidity("Passwords Don't Match");
    }
    else{
        confirm_passsword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_passsword.onkeyup = validatePassword;
