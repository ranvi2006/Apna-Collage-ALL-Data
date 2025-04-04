let nums=[1,2,3,4,5,6,7];

let squre=nums.map((el)=>{
    return el*el;
});
console.log(squre);

let sum=nums.reduce((res,el)=>{
    return res+el;
});

console.log(sum);

let avg=nums.reduce((res,el)=>{
    return res+el;
})/nums.length;
console.log(avg);