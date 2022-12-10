var text_username = document.getElementById("text_username");
var password_password = document.getElementById("password_password");
var btn_sign_in = document.getElementById("btn_sign_in");
var btn_create_an_account = document.getElementById("btn_create_an_account");

btn_sign_in.addEventListener("click", function(){
    if (text_username.value=="123" && password_password.value=="456"){
        alert("Successful user login!");
        window.open("https://www.youtube.com/@HoshimachiSuisei");
    } else{
        alert("Failed to sign in!");
    }
    text_username.value="", password_password.value="";
});
btn_create_an_account.addEventListener("click", function(){
    window.open("create_an_account.html");
});