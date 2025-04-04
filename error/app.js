const express=require("express");
const app =express();
const port=3000;

const ExpressError=require("./ExpressErroe.js");

app.listen(port,()=>{
    console.log("App Listen on port on",port);
});


app.use("/api",(req,res,next)=>{
console.log(req.query);
if(req.query.access=="true")
{
next();
}
else{
    throw new ExpressError(401,"access Denaied");
}
});

app.get("/api",(req,res)=>{
    res.send("Hii ,I am root");
});
app.get("/error",(req,res)=>{
    // res.send("Hii ,I am root");
    abcd=abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin  is Forbidden");
    
});

app.use((err,req,res,next)=>{

    let {status=500,message="Some error occers"}=err;
    res.status(status).send(message+"!");

});