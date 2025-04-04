let h1=document.createElement("h1");
h1.innerText="Dom Prectice";

let body=document.querySelector("body");
body.insertAdjacentElement("afterbegin",h1);
h1.style.textDecoration="none";
h1.style.textDecoration=" underline purple  "


let p1=document.createElement("p");
p1.innerHTML=`<p>Apna College<b> Delta </b> Prectice</p>`;
body.appendChild(p1);




