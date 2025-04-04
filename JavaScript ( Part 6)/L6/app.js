function outer(){
    let a=10;
    let b=6;
    
    function inner(){
        console.log(a);
        console.log(b);
    }
    inner();
}

outer();