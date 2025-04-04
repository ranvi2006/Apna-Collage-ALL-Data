let express=require("express");
const app=express();
const port=3000;
const path=require("path");

app.set("views",path.join(__dirname,"/views"));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.get("/rooldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rooldice.ejs",{num});
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
  const instaData=require("./data.json");
  const data=instaData[username];
  if(data)
  {
    res.render("instagram.ejs",{data});
  }
  else
  {
   res.render("error.ejs"); 
  }
   
    console.log(data);
});
app.get("/",(req,res)=>{
    
    res.render("home.ejs");
});
app.listen(port,()=>{
    console.log(`app is listening on port: ${port}`);
});
