
let btn=document.querySelector("button");
let p=document.querySelector("p");
btn.addEventListener("click",async function(){

    await getFact().then((res)=>{
p.innerText=res.data.fact;
    });
    
});

let url="https://catfact.ninja/fact";

async function getFact() {
try{
    let res=await axios.get(url);
    return res;
}catch(error)
{
    return "No More Fact";
}
}