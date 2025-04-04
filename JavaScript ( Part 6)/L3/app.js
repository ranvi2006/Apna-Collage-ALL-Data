function printSum(a,b){
    return a+b;
}

let sum=printSum(20,printSum(10,10));
console.log(sum);