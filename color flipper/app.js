

const colors= ["blue","yellow","green","red"];
const bg=document.querySelector(".main");
const cr= document.querySelector('.colors');
const btn= document.querySelector(".btn");


btn.addEventListener("click", function () {
   var randomNumber=random();
   bg.style.background=colors[randomNumber];
   cr.textContent=colors[randomNumber];
   console.log(random())
  
});

function random(){
return Math.floor(Math.random()*4);

}

