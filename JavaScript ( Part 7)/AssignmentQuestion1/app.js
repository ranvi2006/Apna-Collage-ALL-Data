let array=[10,20];

const arrayAvg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;

}

console.log(arrayAvg(array));