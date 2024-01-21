let emailInput=document.getElementById("emailInput")
let passwordInput=document.getElementById("passwordInput")
let loginBtn=document.querySelector("#login")
let signIn=document.querySelector("#signin")
let checkText=document.getElementById("checkText")
let regexName=/^[A-Z][a-z]{2,}$/
let regexEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPassword=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
let usersInfo = []


if(localStorage.getItem("usersData")!=null){
    usersInfo=JSON.parse(localStorage.getItem("usersData"))
}

loginBtn.addEventListener('click',function(){
    if(isEmpty() == true){
        showMassege("All inputs is required")
    }
    else if(validLogin(regexEmail,emailInput) == true && validLogin(regexPassword,passwordInput) == true){
        userLogin()
    }
    else{
        showMassege("invalid inputs")
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

function validLogin(regexEl,El){
    if(regexEl.test(El.value)==true){
        return true
    }
    else{
        return false
    }
}

function clearForm(){
    emailInput.value=""
    passwordInput.value=""
    emailInput.classList.remove("is-invalid")
    passwordInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
} 

function showMassege(content){
    checkText.innerHTML=content
}

function checkLogin(){
    for(let i=0;i<usersInfo.length;i++){
        if(usersInfo[i].email == emailInput.value && usersInfo[i].password == passwordInput.value){
            localStorage.setItem("userName",usersInfo[i].name)
            return true      
        }
    }
}

function isEmpty(){
    if(emailInput.value ==false || passwordInput.value ==false){
        return true
    }
    else{
        return false
    }
}

function userLogin(){
    if(checkLogin() == true){
        window.location.href="index3.html" 
    }
    else{
        showMassege("You must sign in first ")
        clearForm()
    }
}
    
signIn.addEventListener('click',function(){
    window.location.href="index2.html"
})

