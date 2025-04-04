let arr=[23,423,43,554,52,4,6];
let lag=-1;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>lag)
    {
        lag=arr[i];
    }
}

console.log(`largest number in arr is ${lag}`);