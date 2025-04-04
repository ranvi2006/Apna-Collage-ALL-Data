let a=10;
try{
    console.log(a);
}
catch(error)

{
    console.log(error);

}

try{
    console.log(b);// it gives errow b is not defined then your catch block will execute;
}
catch(error)

{
    console.log(error);

}

console.log("i have printed after gives erroe");

