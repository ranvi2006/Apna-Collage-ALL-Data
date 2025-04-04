let btn=document.querySelector("button");
let div=document.querySelector("div");
let h1=document.querySelector("h1");

btn.addEventListener("click",()=>{
    let num1=Math.floor(Math.random()*225);
    let num2=Math.floor(Math.random()*225);
    let num3=Math.floor(Math.random()*225);
    h1.innerText=`rgb(${num1},${num2},${num3})`;

    div.style.backgroundColor=`rgb(${num1},${num2},${num3})`;
});

