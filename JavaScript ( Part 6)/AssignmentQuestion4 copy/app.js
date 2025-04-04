
function generateRandomNumber(st, end)
{
 
    return (Math.floor(Math.random()*(end-st))+1)+st;
}

console.log(generateRandomNumber(20,25));
