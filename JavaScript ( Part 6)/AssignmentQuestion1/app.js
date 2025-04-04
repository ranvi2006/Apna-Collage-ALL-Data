const array=[12,32,43,43,52,3,534,5,5654,34,42,,24,53,56,53,23,323656,733,567,64,22,6,7];

function larger(arr ,number)
{
    let dub=[];

    for(let i=0;i<arr.length;i++)
    {
if(array[i]>number)
{
    dub.push(array[i]);
}
    }

    return dub;

}

console.log(larger(array, 50));

