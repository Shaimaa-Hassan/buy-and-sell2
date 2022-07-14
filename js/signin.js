var logein =document.getElementById("logein");
var username =document.querySelector(".username");
var password =document.querySelector(".password");
var checkpassword=localStorage.getItem("password");
var checkusername=localStorage.getItem("username");
logein.addEventListener("click", (e)=>{
    e.preventDefault();
    if(username.value==="" || password.value===""){
        alert("complete your personal information");
    }
     else if(checkusername && checkusername.trim()===username.value.trim() && checkpassword && checkpassword===password.value){
           setTimeout(()=>{
               window.location="trial.html";
           }, 1500);
       } 
       else{
           alert("check your personal information");
       }
    
});//enter to login window