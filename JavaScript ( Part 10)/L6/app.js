
let div=document.querySelector("div");

let btns=document.querySelectorAll("button");
for(let i=0;i<btns.length;i++)
{
    
  btns[i].addEventListener("click",()=>{
    div.style.backgroundColor=`${btns[i].value}`;
  });  
    
}


