const squre=(a)=>(a*a);
console.log(squre(2));

//=================

let id1=setInterval(()=>{
    for(let i=1;i<=4;i++)
    {
        console.log("Hello World");
    }
},2000);

setTimeout(()=>{
    clearInterval(id1)
},10000);