
let input=document.querySelector("input");

input.addEventListener("keydown",function(e){
  console.log(`${e.key}  key was pressed`);
});
input.addEventListener("keyup",(e)=>{
  console.log(`${e.key}  key was released`);
});

