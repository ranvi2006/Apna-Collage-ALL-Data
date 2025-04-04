let inp=document.querySelector("input");

inp.addEventListener("input",(e)=>{
e.preventDefault();
document.querySelector("h2").innerText=`${inp.value}`;
})