let inp=document.querySelector("input");

inp.addEventListener("input",(e)=>{
e.preventDefault();
document.querySelector("h2").innerText=`${inp.value}`;
})
inp.addEventListener("keypress",(e)=>{
e.preventDefault();
console.log("keyy was pressed");
})

let btn=document.querySelector("button");
btn.addEventListener("mouseout",()=>{
    console.log("mouse out");
    
});