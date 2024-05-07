let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");




function validateName(){
    let name = document.getElementById("name").value;
    
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write Full Name";
        return false;
    }
   nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;

}

function validateNo(){
    let phoneNo = document.getElementById("phone-no").value;

    if(phoneNo.length == 0){
        phoneError.innerHTML = "Phone Number is required";
        return false;
    }
    if(phoneNo.length != 10){
        phoneError.innerHTML = "Phone Number should be 10 digits";
        return false;
    }
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateEmail(){
    let email = document.getElementById("email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateMessage(){
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;
    if(left > 0 ){
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateForm(){
    if(!validateName() || !validateNo() || !validateEmail() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML  = "Please fix the error to submit";
        setTimeout(function(){
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
}