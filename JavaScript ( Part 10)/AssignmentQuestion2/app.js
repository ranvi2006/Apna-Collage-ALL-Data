let btn1=document.createElement("button");
let body=document.querySelector("body");
btn1.innerText="click";
body.appendChild(btn1);

btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor="green";
})