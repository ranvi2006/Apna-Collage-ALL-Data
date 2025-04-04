const { type } = require("express/lib/response");
const mongoose=require("mongoose");


let userSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User=mongoose.model("User",userSchema);

module.exports= User;