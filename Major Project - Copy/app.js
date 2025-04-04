const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const app = express();
const path = require("path");
const connectDb = require("./Db/db");
connectDb();
const listingRoute = require("./routes/listings.route");
const reviewRoute=require("./routes/reviews.route");
const authRoute=require("./routes/auth.route");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const session = require("express-session");
const flash = require("connect-flash");

// Middleware for session (should be before flash)
app.use(
    session({
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Set to true if using HTTPS
    })
);

// Initialize flash messages (before routes)
app.use(flash());

// Middleware to make flash messages available in all views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

// ✅ Define routes **after** middleware
app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);
app.use("/auth",authRoute);

module.exports = app;
