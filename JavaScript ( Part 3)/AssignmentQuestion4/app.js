let string=prompt("please enter your weather");

if(string.length==0)
{
    string=prompt("please enter your weather");
}

if(string==string.toLowerCase())
{
    alert("weather is  in lowerCase");
}
else{
    alert("weather is not in lowerCase");

}