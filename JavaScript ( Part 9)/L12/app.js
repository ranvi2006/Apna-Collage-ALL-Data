

// you are given class child by using this chind class you have to change the background color yellow


let ob=document.querySelector(".child");
console.dir(ob.parentElement);
console.dir(ob.parentElement.parentElement);
console.dir(ob.parentElement.parentElement.parentElement);
console.dir(ob.parentElement.parentElement.parentElement.parentElement);
console.dir(ob.parentElement.parentElement.parentElement.parentElement.parentElement);



console.dir(`GrandFather  father the the child class : ${ob.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor="yellow"}`);

let topParent=document.querySelector(".box");
console.dir(topParent);
 for(let i=0;i<document.querySelectorAll(".box a").length;i++)
 {
    document.querySelectorAll(".box a")[i].style.textDecoration="none";
 }
for(let i=0;i<topParent.children.length;i++)
{
     
    topParent.children[i].style.color="red";   
}






