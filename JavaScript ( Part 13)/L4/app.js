let ol=document.querySelector("ol");

let btn=document.querySelector("button");
btn.addEventListener("click",async function() {

    try{

        let li=document.querySelector("li");
        remove();

    }
    catch(error)
    {
        let country=document.querySelector(".con").value;
        let state=document.querySelector("st").value;
        console.log("state",state);
        console.log("--------------------");
        let collages=await getCollage(country,state);
        console.log(collages);
        showData(collages.data);
    }

    let country=document.querySelector("input").value;
    let state=document.querySelector(".st").value;
    console.log("state",state);
    console.log("--------------------");
    let collages=await getCollage(country,state);
    console.log(collages);
    showData(collages.data);
    
    
});

 function remove(){
    let lis=document.querySelectorAll("li");
    for(li of lis)
    {
        li.remove();
    }

}


function showData(collages,state)
{
    for(collage of collages)
    {
       
       
        
    
        console.log("------------",collage["state-province"]);
        let li=document.createElement("li");
            li.innerText=collage.name;
            ol.appendChild(li);
            console.log( collage);
            console.log("with state");
    
            
            
        
        
    }
}

async function getCollage(country){
try{
    let url="http://universities.hipolabs.com/search?country=";
let res=await axios.get(url+country);
return res;
}
catch(error)
{
console.log(error);
}

}