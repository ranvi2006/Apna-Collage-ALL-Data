

// change h1 color green to red


    let h1Obj=document.querySelector("h1");
    let id1=setInterval(()=>{

        let color=h1Obj.getAttribute("class");
        console.log(color);
        if(color=="green")
        {
            h1Obj.setAttribute("class","red");
        }
        else{
            h1Obj.setAttribute("class","green");
            
        }
    },2000);

    setTimeout(()=>{
        clearInterval(id1);
    },20000);


