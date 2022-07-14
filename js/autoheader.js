var headerbox = document.querySelector(".headerbox2");
var lastele = document.querySelector(".lastele");
var listcha = document.querySelectorAll(".listcha");
var ulist = document.querySelector(".ulist");
lastele.addEventListener("mouseover", ()=>{//when hover display block or none
    headerbox.classList.remove("d-none");
headerbox.classList.add("d-block")});
lastele.addEventListener("mouseout", ()=>{
    headerbox.classList.remove("d-block");
    headerbox.classList.add("d-none");
});
listcha.forEach((list) => {//when hover make border bottom to all list element 
    list.addEventListener("mouseover", ()=>{
        list.classList.add("border-bottom", "border-2", "border-secondary");
    })
});
listcha.forEach((list) => {
    list.addEventListener("mouseout", ()=>{
        list.classList.remove("border-bottom", "border-2", "border-secondary");
    })
});
ulist.style.boxShadow = "2px 2px 25px #777";
///////////////////////////////////////////////////////////////////////////header
var n=0;
function content(){
    var tot ="good online courses store";
    var x=tot.split("");
    title.textContent+= x[n];
    if((x.length-1)< n){
                n=1
                title.textContent=x[0];
            }
            else{
                n++
            }

}
setInterval(content, 200);
//////////////////////////////////////////////////auto writting header


