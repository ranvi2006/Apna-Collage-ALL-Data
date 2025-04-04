// // function saveDb(data,success,fail)
// // {
// //    let internet=Math.floor(Math.random()*10)+1;
// //    console.log(internet);
// //    if(internet>4)
// //    {
// //       success();
// //    }
// //    else{
// //       fail();
// //    }
// // }


// saveDb("Data1",()=>{
//    console.log("Data 1 is Saved");
//    saveDb("Data2",()=>{
//       console.log("Data 2 is Saved");
//       saveDb("Data3",()=>{
//          console.log("Data 3 is Saved");
      
//       },()=>{
//          console.log("Week Connection Data was not Saved");
//       });
   
//    },()=>{
//       console.log("Week Connection Data was not Saved");
//    });

// },()=>{
//    console.log("Week Connection Data was not Saved");
// });

function saveDb(data)
{
   return new Promise((resolve,reject)=>{
      let internet=Math.floor(Math.random()*10)+1;
   // console.log(internet);
   if(internet>4)
   {
      resolve("Data Ws Saved");
   }
   else{
      reject("Week Connection");
   }
   });
}

saveDb("Raju")
.then((result)=>{
  
   console.log("Data1 was Sved");
   console.log("Result of Promise: ",result);
   return saveDb("data2");

})
.then((result)=>{
  
   console.log("Data2 was Sved");
   console.log("Result of Promise: ",result);
   return saveDb("data2");
})
.then((result)=>{
   console.log("Data3 was Sved");
   console.log("Result of Promise: ",result);
   
})
.catch((error)=>{console.log("promise was Rejected")
   console.log("Error of Promise: ",error);
});
