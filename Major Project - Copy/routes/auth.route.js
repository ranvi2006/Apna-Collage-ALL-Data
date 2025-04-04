const mongoose = require("mongoose");
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const User = require("../Models/User");

const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashedPassword);
    return hashedPassword;
};

const checkPassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Password Match:", isMatch);
    return isMatch;
};

router.get("/login", wrapAsync(async (req, res) => {
    res.render("listings/login.ejs");
}));

router.post("/login",wrapAsync(async(req,res)=>{
const {email ,password}=req.body;
console.log(email ,password);

const user=await User.findOne({email:email});
if(!user)
{
    req.flash("error_msg","Not registered User");
    res.redirect("/auth/signup");
}
else
{
    const isMatch=checkPassword(password,user.password);
    if(isMatch)
    {
        req.session.user=user;
        res.redirect("/listings");
    }
    else
    {
        req.flash("error_msg","Please Enter Correct Password");
        res.redirect("auth/login");
    }
}

}));
router.get("/signup", wrapAsync(async (req, res) => {
    res.render("listings/signup.ejs");
}));

router.post("/signin", wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const hashPass = await hashPassword(password);
    const isExit = await User.findOne({ email: email });
    
    if (isExit) {
        req.flash("error_msg","You are already Registered! login please");
        return res.redirect("/auth/login");
    }
    else {
        const data = await User.insertMany([{
            name: name,
            email: email,
            password: hashPass
        }]);
        const user = await User.findOne({ email: email });
        req.session.user=user;
        // console.log(req.session);
        return res.redirect("/listings");
    }


}));

router.get("/logout",wrapAsync(async(req,res)=>{
    delete req.session.user;
    res.redirect("/login"); 
}));



module.exports = router;