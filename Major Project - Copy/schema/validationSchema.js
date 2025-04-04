const joi =require("joi");

module.exports.validateListing=joi.object({
    Listing:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        image:joi.string().allow("",null),
        price:joi.number().min(0).required(),
        location:joi.string().required(),
        country:joi.string().required()
    })
});

module.exports.validateReview=joi.object({
    Review:joi.object({
        comment:joi.string().required(),
        rating:joi.number().required().min(1).max(5),
    }).required()
});