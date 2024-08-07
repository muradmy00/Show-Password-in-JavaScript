const password = document.getElementById("pass");

const checked = document.getElementById("check");


checked.onchange = function(){

    password.type = checked.checked ? "text" : "password";

}