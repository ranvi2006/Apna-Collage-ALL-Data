function factory(req)
{
 if(req=="odd")
 {
    let odd=function(number)
    {
        console.log(!(number%2==0));
    }
    return odd;
 }
  else if(req=="even")
 {
    let even=function(number)
    {
        console.log((number%2==0));
    }
    return even;
 }
 else {

    console.log("Wrong Request");
 }
}

let req="odd";

let odd=factory("odd");

console.log(odd);
console.log(odd(3));