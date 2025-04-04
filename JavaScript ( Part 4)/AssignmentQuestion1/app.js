let nums=[1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<nums.length;i++)
{
    if(nums[i]==num)
    {
        nums.splice(i,1);
    }
}
for(let i=0;i<nums.length;i++)
{
   console.log(nums[i]);
}