const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    
})
function validateInputs(){
    const usernameInput=username.value.trim();
    const emailInput=email.value.trim();
    const passwordInput=password.value.trim();
    const cpasswordInput=cpassword.value.trim();
//username validation
    if(usernameInput===''){
        setError(username,'Username is required')
    }
    else{
    setsucces(username)
    }
//email validation
    if(emailInput===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailInput)){
        setError(email,'Please enter a valide email')
    }
    else{
        setsucces(email)
    }
//password validation
   if(passwordInput===''){
    setError(password,'password is required')
   }
   else if(passwordInput > 8){
    setError(password,'password must be atlest 8 character long')
   }
   else {
    setsucces(password)
   }
//confirm password
    if(cpasswordInput===''){    
    setError(cpassword,'confirm password is required')
    }
    else if(cpasswordInput!=passwordInput){
    setError(cpassword,'Password not matched')
    }
    else{
        setsucces(cpassword)
    }

}
// function for set error details
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
//function for set success details
function setsucces(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
//function for email validation
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};