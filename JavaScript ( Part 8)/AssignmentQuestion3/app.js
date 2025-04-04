let str=["RAJU","RANJAN","RAM"];

let isAllUppercase=str.every((el)=>{
return el==el.toLocaleUpperCase();
});

console.log(isAllUppercase);
