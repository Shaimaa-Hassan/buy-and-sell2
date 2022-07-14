var btns = document.querySelectorAll(".btnch");
var showsh = document.createElement("div");//المشتريات
var showsheart = document.createElement("div");//المفضلة

// let total =0;//خزنة
var screenblack = document.querySelector(".screenblack");
var totalprice = document.getElementById("totalprice");
var productbagcont = document.querySelector(".productbagcont");//سلة المشتروات
var bridg = document.querySelector(".bridg");//عدد المشتريات
var k=0;
///////////////////////////////////////////////////////////////////////////calculate total price
var updateTotalPrice = () => {
    var allProductsInBlackScreen =  document.querySelectorAll(".containerparent");//the product chosen in the screenblack
    console.log(allProductsInBlackScreen);
    let total = 0;

    allProductsInBlackScreen.forEach(item => {
    var price = parseInt(item.getElementsByClassName("bookprice")[0].innerText.replace("$", ""));//screenblack price
    var quantity = parseInt(item.getElementsByClassName("input")[0].value);
    total +=parseInt(price*quantity);
    totalprice.innerText = `    ${total}    $`;
});




}


screenblack.addEventListener("change", (eo) => {
    updateTotalPrice();
});


/////////////////////////////////////////////////////////////////////الحذف



screenblack.addEventListener("click", (eo) => {//parent
   
    if (eo.target.classList.contains("btn-secondary")) {//eo= delete button
     eo.target.parentElement.remove();//remove allproductsinblackscreen[item]

     updateTotalPrice();
    bridg.innerHTML=--k;

  
    const nameOfDeletedProduct = eo.target.parentElement.getElementsByClassName("productb")[0].innerText;//اسم المنتج اللي اتمسح
 var paragraphArr = document.querySelectorAll("body > header > div > ul > li:nth-child(1) > div > div > p");//مسكت كل البراجرافات اللي بالسلة وقارنت مابينها وبين اسم المنتج اللي هيتمسح
    paragraphArr.forEach((paragraph)=>{
    if(nameOfDeletedProduct== paragraph.innerText){
        paragraph.innerText="";
    }

  })

 const allCardsInGallary = document.querySelectorAll(".card");//بيجمع كل المنتجات الاب ليهم اللي بيحتويهم 
 
 allCardsInGallary.forEach(item => {//لكل اب كارد 
     const nameOfProductInGalary = item.getElementsByClassName("card-title")[0].innerText;//بيجيب اسم كل منتج على حدا 
     
     
 if (nameOfDeletedProduct  == nameOfProductInGalary  ) {
     const doneButton = item.getElementsByClassName("btn-success")[0];//الزرار لل الاب كارد اللي اتمسح من المشتريات اسم المنتج بتاعه
     doneButton.removeAttribute("disabled");
     doneButton.classList.remove("btn-success");
     doneButton.classList.add("btn-primary");
     doneButton.innerText = "buy";
   
 }
 
 });//addEventListener end
    } //the first if end
 });//forEach end
 
///////////////////////////////////////////////////////////////////////////////////////

// if(localStorage.getItem("username")){
 btns.forEach((btn)=>{ // Change button from "buy" to "Done"
btn.addEventListener("click",(item)=>{
{btn.setAttribute("disabled", " ");
btn.classList.remove("btn-primary");
btn.classList.add("btn-success");
btn.innerHTML=" &#10004; Done";
} //  show mabrooook popup
{var popup = document.createElement("div");
document.body.append(popup);
popup.innerHTML="&#128525;      مبروووووووك";
popup.classList.add("popupdone");

setTimeout(()=>{
    popup.style.transform ="translateX(-60vw)";
}, 1500);
setTimeout(()=>{
    popup.remove();
}, 4000)
}
document.body.append(showsh);
showsh.classList.add("shownshop");
showsh.classList.add("btn", "btn-success");
showsh.innerHTML= "عرض المُشتريات ";

var bigparent = btn.parentElement.parentElement.parentElement;//bring the big parent to the product by using the button
var imgsrc = bigparent.getElementsByClassName("card-img-top")[0].getAttribute("src");//use this big parent to bring img , product name, price
var proname = bigparent.getElementsByClassName("card-title")[0].innerText;
var proprice = bigparent.getElementsByClassName("price")[0].innerText;// product price

var productbag = ` <div dir="rtl"
class="container containerparent mt-5 align-items-center d-flex justify-content-around bg-white border-bottom border-2 border-info rounded"
style="height:100px">
<div dir="rtl" class="book d-flex align-items-center ">
    <img style="height:95px" src="${imgsrc}" alt="b1">
    <p class="productb">${proname}</p>
</div>
<div class="bookn d-flex align-items-center ">
    <input dir="ltr" class="input rounded border-info ps-2" style="width: 50px; height:40px" type="number"
        value="1" min="1" id="numberp">
    <p class="me-3 m-auto">الكمية</p>
</div>
<div class="bookprice d-flex align-items-center text-danger fw-bold fs-5">
   ${proprice}
</div>
<div class="bookdel d-flex align-items-center btn btn-secondary rounded "
    style="width: 50px; height:40px;">حذف</div>
</div>`;
var allproductbag = document.querySelector(".allproductbag");
 allproductbag.innerHTML+= productbag;
productbagcont.innerHTML+= `<p>${proname}</p>`;//product name inside bag
bridg.innerHTML=++k;
 updateTotalPrice();
})

}); // Change button from "buy" to "Done
// }
// else{
//     window.location="trial.html";
// }
////////////////////////////////////////////////////////////////////screenblack
showsh.addEventListener("click", ()=>{
screenblack.style.transform="translateX(0)" ;//هترجع تظهر وتغطي الشاشة
});
var closes = document.querySelectorAll(".cross");
closes.forEach((clo)=>{
    clo.addEventListener("click", ()=>{
        screenblack.style.transform="translateX(-110vw)";//هتروح الجهة المعاكسة جهة الشمال طالما بالسالب
    });
});
var btnpress = document.querySelector(".btnpress");
btnpress.addEventListener("click", ()=>{//veiw all products in bag
    screenblack.style.transform="translateX(0)" ;
});
//////////////////////////////////bag open and close
var bag = document.querySelector(".fa-cart-shopping");//bag icone
var allproductpagcont =document.querySelector(".allproductbagcont");// parent bag product
allproductpagcont.style.display="none";//في الحالة ان السلة فاضية تعملها مش ظاهرة تقفلها 
bag.addEventListener("click", ()=>{//لو السلة مليانة مش فاضية ادخل افحص اذا كانت مقفولة افتحها ولو كانت مفتوحة اقفلها 
    if(productbagcont.innerHTML != ""){//bag contains product
        if(allproductpagcont.style.display=="block"){
            allproductpagcont.style.display="none";
        }
        else{
            allproductpagcont.style.display="block";
        }
    }
})
/////////////////////////////////////////////////////////المفضلة
var heart = document.querySelectorAll(".heart");
heart.forEach((hero)=>{
    hero.addEventListener("click",(eo)=>{
       { hero.style.color ="red";
        hero.setAttribute("disabled", " ");}
        document.body.append(showsheart);
    showsheart.classList.add("shownsheart");
    showsheart.classList.add("btn", "btn-danger");
    showsheart.innerHTML= "عرض المفضلة ";
    

    var bigparent = hero.parentElement.parentElement.parentElement;//bring the big parent to the product by using the button
    var imgsrc = bigparent.getElementsByClassName("card-img-top")[0].getAttribute("src");//use this big parent to bring img , product name, price
    var proname = bigparent.getElementsByClassName("card-title")[0].innerText;
    var proprice = bigparent.getElementsByClassName("price")[0].innerText;// product price
    
    var productbagh = ` <div dir="rtl"
    class="container containerparent mt-5 align-items-center d-flex justify-content-around bg-white border-bottom border-2 border-info rounded"
    style="height:100px">
    <div dir="rtl" class="book d-flex align-items-center ">
        <img style="height:95px" src="${imgsrc}" alt="b1">
        <p class="productb">${proname}</p>
    </div>
    <div class="bookprice d-flex align-items-center text-danger fw-bold fs-5">
       ${proprice}
    </div>
    <div class="bookdel d-flex align-items-center btn btn-secondary rounded "
        style="width: 50px; height:40px;">حذف</div>
    </div>`;
    var allproductbag2 = document.querySelector(".allproductbag2");
     allproductbag2.innerHTML+= productbagh;
    })
})
///////////////////////////////////////////////////////////////////////////
var screenblack2 =document.querySelector(".screenblack2");
showsheart.addEventListener("click", ()=>{
    screenblack2.style.transform="translateX(0)" ;//هترجع تظهر وتغطي الشاشة
    });
    var closes = document.querySelectorAll(".cross");//عشان في كذا اكس للغلق بنفس الاسم
    closes.forEach((clo)=>{
        clo.addEventListener("click", ()=>{
            screenblack2.style.transform="translateX(-110vw)";//هتروح الجهة المعاكسة جهة الشمال طالما بالسالب
        });
    })
    ///////////////////////////////////////////////////////////////////////الحذف من المفضلة 
    screenblack2.addEventListener("click", (eo) => {//parent
   
        if (eo.target.classList.contains("btn-secondary")) {//eo= delete button
         eo.target.parentElement.remove();//remove allproductsinblackscreen[item]
        
     const nameOfDeletedProduct1 = eo.target.parentElement.getElementsByClassName("productb")[0].innerText;//اسم المنتج اللي اتمسح
      
     
     const allCardsInGallary = document.querySelectorAll(".card");//بيجمع كل المنتجات الاب ليهم اللي بيحتويهم 
     
     allCardsInGallary.forEach(item => {//لكل اب كارد 
         const nameOfProductInGalary1 = item.getElementsByClassName("card-title")[0].innerText;//بيجيب اسم كل منتج على حدا 
         
         
     if (nameOfDeletedProduct1  == nameOfProductInGalary1  ) {
         const doneheart = item.getElementsByClassName("heart")[0];//الزرار لل الاب كارد اللي اتمسح من المشتريات اسم المنتج بتاعه
         doneheart.style.color="white";
         doneheart.removeAttribute("disabled");
     }
     
     
     });//addEventListener end
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        } //the first if end
     
     
     
     
     
     
     });//forEach end
    
    