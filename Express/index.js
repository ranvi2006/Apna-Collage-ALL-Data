const express = require('express')
const app = express();
console.log(app);
const port=3000;

app.listen(port,()=>{
    console.log("app is listening in port:",port);
});

// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     if(username=="raju")
//     {
//         res.send("<h1>Welcome to the raju Account</h1>")
//     }
//     else if(username=="ram")
//     {
//         res.send("<h1>Welcome to the ram Account</h1>")
//     }
//     else{
//         res.send("<h1>No existing Account</h1>")
//     }
// });

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`<h1>this is your quary for ${q}</h1>`);
});



// app.use((req,res)=>{
// console.log("Request Reclived");
// res.send("<h1>Raju</h1>");
// });

// app.get("/mango",(req,res)=>{
    
//     let code=" <h1>Mango</h1><ul><li>Type:fruits</li><li>Color:yellow,green</li><li>Price of 1kg: 90 ruppes</li></ul>";
//     res.send(code);
// });

// app.get("/apple",(req,res)=>{
    
//     let code=" <h1>Apple</h1><ul><li>Type:fruits</li><li>Color:red</li><li>Price of 1kg: 180 ruppes</li></ul>";
//     res.send(code);
// });
// app.get("/banana",(req,res)=>{
    
//     let code=" <h1>BANANA</h1><ul><li>Type:fruits</li><li>Color:yellow</li><li>Price of 12 piece: 60 ruppes</li></ul>";
//     res.send(code);
// });