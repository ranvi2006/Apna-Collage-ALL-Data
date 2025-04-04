const mongoose=require("mongoose");
const Review = require("./Review");
const { type } = require("express/lib/response");



let listingSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{type:String,
        required: true
    },
    image:{
        filename:{
            type:String

        },
        url: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s",
            set: (v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" : v
        }

    },
    price:{type:String,required: true},
    location:{type:String,required: true},
    country:{type:String,required: true},
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]
    
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;