let logout=document.querySelector("#logout")
document.getElementById("home").innerHTML="Welcome "+localStorage.getItem("userName")
logout.addEventListener("click",function(){
    window.location.href="index.html"
})

