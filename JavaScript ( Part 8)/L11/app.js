// Destructor
let names=["Raju","Ram","Akash","Ranjan","Viksh","Prem","Ravi"];
// let winner=names[0];
// let runnerup=names[1];
// let secoundRunnerup=names[2];
// console.log(winner,runnerup,secoundRunnerup);

let [winner,runnerup,...others]=names;
console.log(winner);
console.log(runnerup);
console.log(others);