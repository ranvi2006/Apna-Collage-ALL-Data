let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

// div.addEventListener("click",()=>{
//     console.log("Div was Clicked");
// })
// ul.addEventListener("click",()=>{
//     console.log("Ul was Clicked");
// })

// for(li of lis)
// {
//     li.addEventListener("click",()=>{
//         console.log("Li was Clicked");
//     })
// }

// appling stopProgation for stop bubbling
div.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Div was Clicked");
})
ul.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Ul was Clicked");
})

for(li of lis)
{
    li.addEventListener("click",(e)=>{
        e.stopPropagation();
        console.log("Li was Clicked");
        
    })
}



