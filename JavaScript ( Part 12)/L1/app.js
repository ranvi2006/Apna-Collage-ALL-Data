async function fun() {
    return "Raju";
}

fun()
.then((result)=>{
    console.log("Result : ",result);
}).catch((error)=>{
    console.log("Error :",error);
});