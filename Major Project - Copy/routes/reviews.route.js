const express=require("express");
const Router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../Models/Review.js");
const Listing = require("../Models/Listing.js");
const validationSchema = require("../schema/validationSchema.js");

const login=true;

let validateReview = (req, res, next) => {
    let { error } = validationSchema.validateReview.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}

Router.post("/",validateReview,wrapAsync(async (req, res, next) => {
    

    const id = req.params.id; // Extract ID from params
    console.log("id:",id);
    
    const reviewData = req.body.Review; // Extract Review content from body

    // Create and save the new review
    const newReview = new Review(reviewData);
    await newReview.save();
    

    // Find the listing and push the new review
    const list = await Listing.findOne({ _id: id });
    if (!list) {
      return res.status(404).json({ message: "Listing not found" });
    }

    list.reviews.push(newReview._id); // Push only the review's ObjectId
    await list.save(); // Save the updated listing
    req.flash('success_msg', 'Review Posted!');

    console.log("Updated Listing:", list);

res.redirect(`/listings/${id}`);
    
    

}));

Router.delete("/:rid",wrapAsync(async (req, res, next) => {
    

    const id = req.params.id; 
    const rid = req.params.rid; 
    console.log("Rid----",rid ,'Id');
    
   await Review.findByIdAndDelete({_id:rid});
   req.flash('success_msg', 'Review Deleted!');
   res.redirect(`/listings/${id}`);


}));


module.exports=Router;