
let h1=document.querySelector("h1");

function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>{
     setTimeout(function()
     {

        let speed=Math.floor(Math.random()*5)+1;
        if(speed<2)
        {
            reject();
        }
        h1.style.color=color;
        console.log(color);
        resolve();
     },1000);

    });
}


async function fun() {

  try{
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
  }
  catch(error){
    console.log("Error Found");

  }

  console.log("Task Complted");
    
}

fun();