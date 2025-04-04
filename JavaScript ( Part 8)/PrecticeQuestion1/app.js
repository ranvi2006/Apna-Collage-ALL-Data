// Q1
{
    let array=[10,20,30,40,50];
    let isMultiple=array.every((el)=>{
          return el%10==0;
    });
    console.log(isMultiple);

}
//Q2
{
   let array=[23,42,4,24,24,53,5,23,122,43]; 

   let min=array.reduce((res,el)=>{
    if(res>el)
    {
        return el;
    }
    else{
         return res;
    }
   });
   console.log(min);
}
