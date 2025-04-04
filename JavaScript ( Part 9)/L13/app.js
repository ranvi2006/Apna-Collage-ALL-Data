
let para=document.createElement("button");
para.innerHTML=`end`;
let para2=document.createElement("button");
para2.innerHTML=`start`;
let para3=document.createElement("button");
para3.innerHTML=`agterbegin`;
let para4=document.createElement("button");
para4.innerHTML=`afterend`;
let para5=document.createElement("button");
para5.innerHTML=`beforebegin`;
let para6=document.createElement("button");
para6.innerHTML=`beforeend`;
console.log(para);

let body=document.querySelector(".box");
body.append(para);
body.prepend(para2);
body.insertAdjacentElement("afterbegin",para3);
body.insertAdjacentElement("afterend",para4);
body.insertAdjacentElement("beforebegin",para5);
body.insertAdjacentElement("beforeend",para6);


