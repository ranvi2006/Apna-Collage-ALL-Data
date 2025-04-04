// defalut peramiter

const power=(x,n=1)=>{
let pow=1;
for(let i=1;i<=n;i++)
{
    pow*=x;
}
return pow;
};

console.log(power(2,2));
