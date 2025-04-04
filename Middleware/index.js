const express=require("express");
const app=express();
const port=3000;


app.use("/random",(req,res,next)=>{
    req.time=new Date(Date.now());
    console.log(req.time);
    
    
    next();
});

app.listen(port,()=>{
    console.log(" App Listen on port :",port);
});



app.get("/",(req,res)=>{
    res.send("hii ,i am root");
});

app.get("/random",(req,res)=>{
    res.send("Hii , i am random page");
});