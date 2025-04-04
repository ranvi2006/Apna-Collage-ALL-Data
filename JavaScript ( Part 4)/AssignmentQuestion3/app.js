let number=prompt("Enter your number" );

let digit=""+number;
let sum=0;
for(let i=0;i<digit.length;i++)
{
    let num=Number(digit[i]);
    sum+=num;
}

alert(`sum of all digit is ${sum}`);