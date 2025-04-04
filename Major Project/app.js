
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Listing = require("./Models/Listing.js");
const User = require("./Models/User.js");
const Review = require("./Models/Review.js");
const data = require("./init/data.js");
const path = require("path");
var methodOverride = require('method-override');
let mongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const validationSchema = require("./schema/validationSchema.js");

const engine = require("ejs-mate");
const { error } = require("console");
const { redirect } = require("express/lib/response.js");
const listings=require("./routes/listings.route.js");
// console.log(listings);

main().then(
    console.log("Connection Build to Your Databse")
).catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoUrl);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views/listings"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname,"public/css")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let validateListing = (req, res, next) => {
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



app.get("/", async (req, res) => {
    res.render("signup.ejs");
});
app.get("/login", async (req, res) => {
    res.render("login.ejs");
});
app.use("/listings",listings);
app.use("/",listings);

app.all("*", (req, res, next) => {
    // console.log("Error");
    next(new ExpressError(404, "Page not found!"));

});

app.use((error, req, res, next) => {

    let { statusCode = 500, message = "Some Error Occured" } = error;
    res.render("Errors.ejs", { statusCode, message });

});

app.listen(port, () => {
    console.log("Sever Listen on port ", port);
});








