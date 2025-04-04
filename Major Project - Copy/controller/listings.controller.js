
const login=true;
const Listing=require("../Models/Listing");

const showListings=async(req,res)=>{

    const lists=await Listing.find({});
    res.render("listings/index.ejs" ,{lists ,cssPath:"/css/index.css",title:"Home page",login});
    
};

const addListing=async(req,res)=>{

    const {title,description,price,image,location,country}=req.body;
    await Listing.insertMany([{
        title:title,
        description:description,
        image:{
            url:image
        },
        price:price,
        location:location,
        country:country
    }]);
    req.flash('success_msg', 'List Added!');

    res.redirect("/listings");
    
}

const showCreatePage=async(req,res)=>{
   
    res.render("listings/new.ejs", {title:"Add Page" , cssPath:"/css/new.css",login});

}

const showListing=async(req,res)=>{
    let {id}=req.params;
    let list=await Listing.findOne({_id:id});
    const review = await Listing.findOne({_id:id}).populate("reviews");
    const reviews=review.reviews;
    console.log(reviews);
    
    
    res.render("listings/show.ejs",{title:"show page",list:list,cssPath:"/css/show.css",reviews,login});
}

const updateListing=async(req,res)=>{
    const {id}=req.params;
    const {title,description,price,image,location,country}=req.body;
    await Listing.findByIdAndUpdate({_id:id},{
        title:title,
        description:description,
        image:{
            url:image
        },
        price:price,
        location:location,
        country:country

    });

    res.redirect(`/listings/${id}`);
}

const deleteListing=async(req,res)=>{
    const {id}=req.params;
    await Listing.findByIdAndDelete({_id:id});
    req.flash('success_msg', 'Deleted successful!');
    res.redirect("/listings");
}

const showEditPage=async(req,res)=>{
    const {id}=req.params;
    const list=await Listing.findOne({_id:id});
res.render("listings/edit.ejs",{title:"Edit page",cssPath:"/css/edit.css",list,login});
};

module.exports={
    showListings,
    addListing,
    showCreatePage,
    showListing,
    updateListing,
    deleteListing,
    showEditPage
}