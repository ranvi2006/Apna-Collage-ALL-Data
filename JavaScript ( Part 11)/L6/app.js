function saveDb(data,success,fail)
{
   let internet=Math.floor(Math.random()*10)+1;
   console.log(internet);
   if(internet>4)
   {
      success();
   }
   else{
      fail();
   }
}


saveDb("Data1",()=>{
   console.log("Data 1 is Saved");
   saveDb("Data2",()=>{
      console.log("Data 2 is Saved");
      saveDb("Data3",()=>{
         console.log("Data 3 is Saved");
      
      },()=>{
         console.log("Week Connection Data was not Saved");
      });
   
   },()=>{
      console.log("Week Connection Data was not Saved");
   });

},()=>{
   console.log("Week Connection Data was not Saved");
});