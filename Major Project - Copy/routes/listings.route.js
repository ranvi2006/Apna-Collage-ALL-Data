const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync");
const listingController=require("../controller/listings.controller");
const auth=require("../middlewares/Auth");


router.get("/",auth.isLogin,wrapAsync(listingController.showListings));
router.post("/",wrapAsync(listingController.addListing));
router.get("/new",wrapAsync(listingController.showCreatePage));

router.get("/:id",wrapAsync(listingController.showListing));

router.post("/:id",wrapAsync(listingController.updateListing));

router.delete("/:id",wrapAsync(listingController.deleteListing));




router.get("/:id/edit",wrapAsync(listingController.showEditPage));




module.exports=router;
