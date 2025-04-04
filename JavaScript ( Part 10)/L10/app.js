
let para=document.querySelector("p");
let inp=document.querySelector("input");

inp.addEventListener("input",()=>{
  console.log(inp.value);
  para.innerText=`${inp.value}`;
});
