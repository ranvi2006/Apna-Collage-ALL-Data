let body=document.querySelector("body");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("value","username");
body.appendChild(input);

let button1=document.createElement("button");
button1.innerText="Click Me";
button1.setAttribute("id","btn");
body.appendChild(button1);

let btn1=document.getElementById("btn");
btn1.style.backgroundColor="blue";
btn1.style.color="white";





