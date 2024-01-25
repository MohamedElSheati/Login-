let nameInput=document.getElementById("nameInput")
let emailInput=document.getElementById("emailInput")
let passwordInput=document.getElementById("passwordInput")
let gobackBtn=document.getElementById("gobackBtn")
let signUpBtn=document.querySelector("#signUp")
let regexName=/^[A-Z][a-z]{3,}$/
let regexEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPassword=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
let usersInfo = []

if(localStorage.getItem("usersData")!=null){
    usersInfo=JSON.parse(localStorage.getItem("usersData"))
}

signUpBtn.addEventListener('click',function(){
     if(isEmpty() == true){
        showMassege("All inputs is required")
    }
    else if(validSignin(regexName,nameInput) == true && validSignin(regexEmail,emailInput) == true && validSignin(regexPassword,passwordInput) == true ){
        userSignin()
    }
    else{
        showMassege("invalid inputs")
    }
})

nameInput.addEventListener("change",function(){
    if(regexName.test(nameInput.value)==true){
        nameInput.classList.add('is-valid')
        nameInput.classList.remove('is-invalid')
    }
    else{
        nameInput.classList.remove('is-valid')
        nameInput.classList.add('is-invalid')
    }
})
emailInput.addEventListener("change",function(){
    if(regexEmail.test(emailInput.value)==true){
        emailInput.classList.add('is-valid')
        emailInput.classList.remove('is-invalid')
    }
    else{
        emailInput.classList.remove('is-valid')
        emailInput.classList.add('is-invalid')
    }
})
passwordInput.addEventListener("change",function(){
    if(regexPassword.test(passwordInput.value)==true){
        passwordInput.classList.add('is-valid')
        passwordInput.classList.remove('is-invalid')
    }
    else{
        passwordInput.classList.remove('is-valid')
        passwordInput.classList.add('is-invalid')
    }
})

function validSignin(regexEl,El){
    if(regexEl.test(El.value)==true){
        
        return true
    }
    else{
        
        return false
    }
} 

function checkSignin(){
    for(let i=0;i<usersInfo.length;i++){
        if(usersInfo[i].email == emailInput.value){
            return true      
        }
    }
} 

function isEmpty(){
    if(nameInput.value ==false || emailInput.value ==false || passwordInput.value ==false){
        return true
    }
    else{
        return false
    }
}

function clearForm(){
    nameInput.value=""
    emailInput.value=""
    passwordInput.value=""
    nameInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-invalid")
    passwordInput.classList.remove("is-invalid")
    nameInput.classList.remove("is-valid")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
}
    
function showMassege(content){
    result.innerHTML=content
}

function userSignin(){
   if(checkSignin() == true){
        showMassege("This User is Exist ,Try again ")
        clearForm()
    }
    else{
        let userEl ={
        name : nameInput.value,
        email : emailInput.value,
        password: passwordInput.value,
        }
        usersInfo.push(userEl)
        localStorage.setItem("usersData",JSON.stringify(usersInfo))
        clearForm()
        showMassege("Sucess")
    }
}


gobackBtn.addEventListener("click",function(){
    window.location.href="index.html"
})