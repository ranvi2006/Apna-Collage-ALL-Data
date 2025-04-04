// print all smail image

let para=document.querySelector("p");
console.dir(para);
console.log(para.innerText);
// get all the anchor tags text which is present inside the div 
let anchor=document.querySelectorAll("div a");
console.dir(anchor);
for(let i=0;i<anchor.length;i++)
{
 console.dir(anchor[i].innerText);   
}



