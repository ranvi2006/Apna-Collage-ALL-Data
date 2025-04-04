//reduse method;
let arr=[45,53,1,432,53,23,25,25,52,13,6334,56435,64,99999];
let max=arr.reduce((res,el)=>{
    if(el>res)
    {
        return el;
    }
    else{
         return res;
    }
});
console.log(max);
