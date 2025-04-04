let btn=document.querySelectorAll("button");

for(let i=0;i<btn.length;i++)
{
    

    btn[i].addEventListener("dblclick",()=>{
        console.log("you double clicked");
    });
}

