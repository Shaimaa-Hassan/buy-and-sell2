var signup =document.getElementById("signup");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var repassword = document.querySelector(".repassword");

signup.addEventListener("click", (e)=>{
    e.preventDefault();
    if(username.value==="" || password.value==="" ||email.value==="" || repassword.value===""){
        alert("complete your personal information");
    }
    else{
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("confirmation", repassword.value)
   
    setTimeout(()=>{
        window.location="signin.html"
    }, 1500);
};
// 

});//enter to signup page


