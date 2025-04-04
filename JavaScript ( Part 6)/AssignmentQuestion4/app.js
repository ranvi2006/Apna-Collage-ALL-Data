function countVowel(str)
{
    let array=['a','A','i','I','o','O','e','E','u','U'];
let count=0;
for(let i=0;i<str.length;i++)
{
    if(array.indexOf(str[i])!=-1)
    {
        count++;
    }
}

return count;
}


