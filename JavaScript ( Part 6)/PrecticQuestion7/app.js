
let greet="hello";  // Global Scope
function changeGreet()
{
    let greet="namste"; //Function Scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); //Lexical Scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();


