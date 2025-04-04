

// change h1 color green to red


    let h1Obj=document.querySelector("h1");
    let id1=setInterval(()=>{

        let color=h1Obj.getAttribute("class");
        console.log(color);
        if(color=="green")
        {
            h1Obj.setAttribute("class","red");
           h1Obj.style.textDecoration="underline"
        }
        else{
            h1Obj.setAttribute("class","green");
            h1Obj.style.textDecoration="underline dotted"
            
            
        }
    },2000);

    setTimeout(()=>{
        clearInterval(id1);
    },20000);


