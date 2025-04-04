
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

let ul=document.querySelector("ul");
ul.addEventListener("click",function(e){
if(e.target.nodeName=="BUTTON")
{
    let delBtn=e.target;
    let parent=delBtn.parentElement;
    parent.remove();
}
})



