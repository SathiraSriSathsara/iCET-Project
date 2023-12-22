let username = "user";
let password = "password";


function checkUser(){
    let user = document.getElementById("user-username").value;
    let pass = document.getElementById("user-password").value;

    if (user==username && password==pass){
        window.location = "/pages/home.html";
        return false;
    }else{
        alert("Try Angain!!")
    }
}