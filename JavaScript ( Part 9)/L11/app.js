

// change h1 color green to red


    let h1Obj=document.querySelector("h1");
    console.log(h1Obj.classList);
    h1Obj.classList.add("red");
    h1Obj.classList.remove("green");
    console.log(`h1 tag contain red class or not ${h1Obj.classList.contains("red")}`);


