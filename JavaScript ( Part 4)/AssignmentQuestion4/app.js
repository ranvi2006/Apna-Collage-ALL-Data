let number=prompt("Enter your number" );
let fact=1;

for(let i=number;i>0;i--)
{
fact*=i;
}
alert(`factorial of ${number} is ${fact}`);