
let btn=document.querySelector("button");
console.dir(btn);
btn.addEventListener("click",()=>{
    let task=document.querySelector("input").value;
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    let del=document.createElement("button");
    del.innerText="-"
    li.innerText=`${task}`;
    ul.appendChild(li).appendChild(del);
    document.querySelector("input").value="";

});

let delBtns=document.querySelectorAll("li button");
for(let i=0;i<delBtns.length;i++)
{
  delBtns[i].addEventListener("click",()=>{

        let li=delBtns[i].parentElement;
        console.log(li);
        li.remove();
    })
}

