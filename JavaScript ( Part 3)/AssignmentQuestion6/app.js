let students=["raju","ranjan","abhishek","ram","akash","jitan","prince"];
let name=prompt("Please enter your name").toLowerCase();
console.log(students.indexOf(name));
console.log(name);

if(students.indexOf(name)>=0)
{
alert("You are Passed");
}

else{
    alert("You are Failed");

}
