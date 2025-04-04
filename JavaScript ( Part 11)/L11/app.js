let h1=document.querySelector("h1");

function changeColor(color,delay)
{
return new Promise((resolve,reject)=>{
   
setTimeout(()=>{
   h1.style.color=color;
   resolve("ColorChange");
},delay);
});

}



changeColor("red",1000).then(
   ()=>{
      console.log("Red Was  added");
      return changeColor("yellow",1000);
   }
)
.then(()=>{
   console.log("yellow Was  added");
   return changeColor("blue",1000);
})
.then(()=>{
   console.log("blue Was  added");
})
.catch(()=>{
   console.log("Rejected");
});

