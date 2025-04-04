
const isLogin=async(req,res,next)=>{
    console.log("Raju");
    if(req.session.user)
    {
        next();
    }
    else
    {
         return res.render("listings/login.ejs");
    }
    
}

module.exports={
    isLogin
}