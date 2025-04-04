
let countries = ["United States", "Canada", "Brazil", "Germany", "France", "Japan", "Australia", "India", "China", "Mexico", "Italy", "Russia", "South Africa", "United Kingdom", "Spain", "Argentina", "Egypt", "Turkey", "South Korea", "Sweden"];

function findLongestCountry(list)
{
    let str=null;
    let max=0;
    for(let i=0;i<list.length;i++)
    {
        if(list[i].length>max)
        {
            str=list[i];
            max=list[i].length;
        }
    }
    return str;
}

console.log(findLongestCountry(countries));
