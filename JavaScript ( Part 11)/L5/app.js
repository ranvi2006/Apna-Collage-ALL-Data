let h1=document.querySelector("h1");

function changeColor(color,delay,nextColor)
{
setTimeout(function()
{
   h1.style.color=color;
   if(nextColor)
   {
nextColor();
   }
},delay)

}

changeColor("red",1000,()=>{
   changeColor("yellow",1000,()=>{
      changeColor("blue",1000);
   });
});

// CallBack Hell-----> 