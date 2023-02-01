var button = document.querySelectorAll(".rate");
var result=document.getElementById(".selres");
var submit=document.querySelector(".submit");
var card=document.querySelector(".card");
var thanks=document.querySelector(".thanks")
var please=document.querySelector(".plsrateus");



submit.addEventListener("click", changePage);

function changePage(){
    if(result.innerHTML==''){
    please.classList.remove("hidden");
    }
    else{
        card.style.display="none";
        thanks.classList.remove("hidden");
    }
}



button.forEach(function(x){
    x.addEventListener("click",function(){
    result.innerHTML=x.innerHTML;
    });
});