const mongoose=require("mongoose");
module.exports=function()
{
    mongoose.connect('mongodb://127.0.0.1:27017/wanderlust').then(()=>{
        console.log("COnnected to Database");
    });
}