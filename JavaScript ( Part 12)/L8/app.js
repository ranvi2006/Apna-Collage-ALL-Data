

let json='{"name":"John", "age":30, "car":null}';
let h2=document.querySelector("h2");
h2.innerHTML=json;

let jsonObj=JSON.parse(json);
console.log(jsonObj);