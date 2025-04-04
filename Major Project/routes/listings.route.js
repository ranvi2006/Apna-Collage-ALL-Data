const express=require("express");

const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const validationSchema = require("../schema/validationSchema.js");
const Listing = require("../Models/Listing.js");
const User = require("../Models/User.js");
const Review = require("../Models/Review.js");
const data = require("../init/data.js");


let validateListing = (req, res, next) => {
    // console.log(req.body.Listing);
    let { error } = validationSchema.validateListing.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}
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

// index Route
router.get("/", wrapAsync(async (req, res, next) => {
    console.log('Raju');
    let all = await Listing.find({});
    //  console.log(all);
    res.render("index.ejs", { lists: all });
}))
// Create new Route

router.get("/new", wrapAsync((req, res, next) => {
    res.render("new.ejs");
}));

// Show Route
router.get("/:id", wrapAsync(async (req, res, next) => {
    // console.log("Show Route");
    let { id } = req.params;
    let list = await Listing.findOne({ _id: id });
    let reviews= await Review.find({_id:{$in: list.reviews}});
    res.render("show.ejs", { list ,reviews});
}));

// add List

router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    let myListing=req.body.Listing
    let newListing = await new Listing({
        title:myListing.title,
        description:myListing.description,
        image:{
            url:myListing.image
        },
        price:myListing.price,
        location:myListing.location,
        country:myListing.country

    });
    await newListing.save();

    res.redirect("/Listings");

}));
// Edit Route
router.get("/:id/edit", wrapAsync(async (req, res, next) => {
    let {id}=req.params;
    console.log("id--",id);
    let list = await Listing.findOne({ _id:id });
    res.render("edit.ejs", { list });
}));
router.post("/:id/reviews",validateReview,wrapAsync(async (req, res, next) => {
    

    const id = req.params.id; // Extract ID from params
    const reviewData = req.body.Review; // Extract Review content from body

    // Create and save the new review
    const newReview = new Review(reviewData);
    await newReview.save();
    console.log("New Review:", newReview);

    // Find the listing and push the new review
    const list = await Listing.findOne({ _id: id });
    if (!list) {
      return res.status(404).json({ message: "Listing not found" });
    }

    list.reviews.push(newReview._id); // Push only the review's ObjectId
    await list.save(); // Save the updated listing

    console.log("Updated Listing:", list);

    res.redirect(`/${id}`);

}));

router.delete("/:id/:rid",wrapAsync(async (req, res, next) => {
    

    const id = req.params.id; 
    const rid = req.params.rid; 
    console.log("Rid----",rid ,'Id');
    
   await Review.findByIdAndDelete({_id:rid});
   res.redirect(`/${id}`);


}));
// Update Route
router.put("/:id", validateListing, wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let myListing=req.body.Listing;

    console.log("upadated : ", id);
    console.log('---------------------',myListing);
    await Listing.findOneAndUpdate({ _id: id }, {
        title:myListing.title,
        description:myListing.description,
        image:{
            url:myListing.image
        },
        price:myListing.price,
        location:myListing.location,
        country:myListing.country

    });
    res.redirect(`/${id}`);

}));

// delete Route

router.delete("/:id", wrapAsync(async (req, res, next) => {
    console.log("delete Route");
    let id = req.params.id;
    await Listing.findByIdAndDelete(id).then((result) => {
        console.log(result);
        res.redirect("/Listings");
    })
}));

module.exports=router;
