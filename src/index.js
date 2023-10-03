import './styles.css';
import bgimg from './assets/back.jpg';
document.body.style = `background:url(${bgimg}); background-size: cover;`;

const email = document.querySelector('#email');
const zip = document.querySelector('#zipcode');
const pass = document.querySelector('#password');
const repass = document.querySelector('#password-confirmation');
const form = document.querySelector('.sign-up-form');

var error_cont = document.querySelector('.error-container');
email.addEventListener('input', validateEmail);
zip.addEventListener('input', validateZip);
pass.addEventListener('input', validatePass);
repass.addEventListener('input', validateConfirmpass);
form.addEventListener('submit', submitForm);


function validateEmail(){

    if(email.validity.typeMismatch){
        error_cont.textContent = 'Please enter a valid email address';

    }else{
        document.querySelector('.error-container').textContent = '\u00A0';

    }
}

function validateZip(){
    if(zip.validity.tooShort){
        error_cont.textContent = 'Zip should be atleast 7 characters seperated by space after 3rd character';
    }
    else if(zip.validity.patternMismatch){
        error_cont.textContent = 'Please enter the correct pattern A0B 9C8 !';
    }
    else{
        error_cont.textContent = '\u00A0';
    }
}

function validatePass(){
    if(pass.validity.tooShort){
        error_cont.textContent = 'Password should at least have 8 characters';   
    }
    else if(pass.validity.patternMismatch){
        
        if(!/[A-Z]/.test(pass.value)){
            error_cont.textContent = 'Password should contian at least one capital letter [A-Z]!!';
        }
        else if(!/[a-z]/.test(pass.value)){
            error_cont.textContent = 'Password should contian at least one small letter [a-z]!!';
        }
        else if(!/\d/.test(pass.value)){
            error_cont.textContent = 'Password should contian at least one number [0-9]!!';
        }
        else if(!/[-+_!@#$%^&*., ?]/.test(pass.value)){
            error_cont.textContent = 'Password should contian at least one special character [- + _ ! @ # $ % ^ & * . , ?]!!';
        }
    }
    else{
        error_cont.textContent = '\u00A0';
    }
}


function validateConfirmpass(){
    if(pass.value ===repass.value){
        repass.setCustomValidity("");
        error_cont.textContent = '\u00A0';
    }
    else{
        repass.setCustomValidity("password mismatch");
        error_cont.textContent = 'Passwords should match!';
    }
}


function submitForm(event){
    if(!email.validity.valid && !zip.validity.valid && !pass.validity.valid && !repass.validity.valid){
        event.preventDefault();
        error_cont.textContent = 'Fill out all the fields appropriately';
    }
    else{
        error_cont.textContent = 'Thank you for Submission';
        event.preventDefault();

    }

}