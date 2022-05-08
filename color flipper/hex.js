const colors= [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const bg=document.querySelector(".main");
const cr=document.querySelector(".colors");
const btn=document.querySelector(".btn");


btn.addEventListener("click" , function() 
{

 let hex="#";
 for(let i=0;i<6;i++){
    const randomNumber=colors[random()];
     hex += randomNumber;
 }

 bg.style.background=hex;
 cr.textContent=hex;


});

function random(){
    return Math.floor(Math.random()*12);
}

