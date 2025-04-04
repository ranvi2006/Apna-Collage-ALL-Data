

let url="https://catfact.ninja/fact";


async function getImg() {
try{
    let res=await axios.get(url);
    console.log(res.data);
}catch(error)
{
 
}
}
async function getFact() {
    try{
        let con={accept:"application/html"}
        let res=await axios.get(url,con);
        console.log(res.data);
    }catch(error)
    {
     
    }
    }
getImg();

getFact();
