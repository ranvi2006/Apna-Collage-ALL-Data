
let btn=document.querySelector("button");
let img=document.querySelector("img");
btn.addEventListener("click",async function(){

    
    let res= await getImg();
    img.setAttribute("src",res.data.message);
    
});

let url="https://dog.ceo/api/breeds/image/random";

async function getImg() {
try{
    let res=await axios.get(url);
    return res;
}catch(error)
{
    return "/";
}
}