
let h1=document.querySelector("h1");

function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>{
     setTimeout(function()
     {
        h1.style.color=color;
        console.log(color);
        resolve();
     },1000);

    });
}


async function fun() {

   await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
    
}

fun();