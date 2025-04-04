const express=require("express");

 let app=express();
 const port=3000;


 
app.listen(port,(req,res)=>{
    console.log("App Server is Listening");
});

app.use(express.urlencoded({extented:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user}=req.query;

    res.send(`Standred Get Request ,Welcome ${user}`);
    
});
app.post("/register",(req,res)=>{
    let {user}=req.body;
    res.send(`Standred Post Request ,Welcome ${user}`);
});