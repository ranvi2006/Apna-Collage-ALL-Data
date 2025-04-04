const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("Connection successfully build")

}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amezon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// let userSchema=mongoose.Schema({
//     name:String,
//     phone_no:Number,
//     marks:Number,
//     city:String

// });

// const User=mongoose.model("User",userSchema);


// User.updateOne({name:"Raju"},{marks:400}).then((res)=>{
// console.log(res);

// }).catch((err)=>{
//     console.log(err);
// });
// User.findOne({name:"Raju"}).then((res)=>{
//     console.log(res);
// });

// User.findOneAndDelete({name:"Kaju"}).then((res)=>{console.log(res)});
// User.findOneAndUpdate({name:"Raju"},{name:"Abhishek"}).then((res)=>{
//     console.log(res);
// });

// User.findOne({name:"Abhishek"}).then((res)=>{
//     console.log(res);
// });


let bookSchema=mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    auther:{
        type:String
    },
    price:{
        type:Number,
        min:[1,"Price should not be less then 1"]
    }
});

let Book=mongoose.model("Book",bookSchema);

// Book.insertMany([
//     {tittle:"War and Peace",
//         auther:"Leo Tolstoy",
//         price:1200,
//     },
//     {tittle:"Great Expections",
//         auther:"Charles Dickens",
//         price:650,
//     },
//     {tittle:"To The Lighthouse",
//         auther:"Virginia Woolf",
//         price:500,
//     }]
// ).then((res)=>{console.log(res)}).catch((res)=>{console.log(res)});

Book.insertMany( {tittle:"Great Expections V2",
            auther:"Charles Dickens Sons",
            price:-650,
        }).catch((err)=>{
            console.log(err.errors.price.properties.message);
        });