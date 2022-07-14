var fresh = document.getElementById("refresh");
var deee = document.createElement("div");

if(localStorage.getItem("username")){
    fresh.innerHTML=" ";
    fresh.append(deee);
    deee.classList.add("update");
deee.innerHTML=localStorage.getItem("username");
}
var listd = document.querySelector(".divlist");
deee.append(listd);//لازم تكون بداخلها عشان تظبط
listd.classList.add("d-none");
deee.addEventListener("mouseover", ()=>{
    listd.classList.remove("d-none");
    listd.classList.add("d-block");
})
deee.addEventListener("mouseout", ()=>{
    listd.classList.remove("d-block");
    listd.classList.add("d-none");
});
// fresh.style.padding="20px";
var firstlist = document.querySelector("#refresh > div > div > ul > li:nth-child(1)");
firstlist.addEventListener("click",()=>{
    localStorage.clear();
    setTimeout(()=>{ window.location="signin.html"; }, 1500);
})
////////////////////////////////////////////////login signup