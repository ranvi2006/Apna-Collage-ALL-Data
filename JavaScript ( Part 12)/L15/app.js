

let url="https://catfact.ninja/fact";

fetch(url).then((res)=>{
console.log(res);
return res.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error Found ",error);
});