

// Map method in 
const array=[3,43,53,54];
let double=array.map(function(el){
return el*2;
});

console.log(double);

// filtter method
let nums=[1,2,3,4,5,6,7,8,9,10];
let even=nums.filter((el)=>{
    return el%2==0;
});
console.log(even);

