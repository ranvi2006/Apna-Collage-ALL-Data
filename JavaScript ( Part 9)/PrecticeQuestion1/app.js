// Q1:

let element1=document.createElement("p");
// element1.innerHTML=`<p style="color:blue">Hii ' I am red</p>`;
element1.innerText="hii ' i am red";

element1.style.color="red";
let body=document.querySelector("body");
body.append(element1);

// Q2:

let element2=document.createElement("h3");
body.append(element2);
element2.innerText="i am blue";
element2.style.color="blue";

//Q3:
let div=document.createElement("div");
div.style.border="2px black solid";
div.style.backgroundColor="pink";
body.append(div);
let h1=document.createElement("h1");
h1.innerText="I am in div";
div.appendChild(h1);

let p=document.createElement("p");
p.innerText="Me Too";
div.insertAdjacentElement("beforeend",p);