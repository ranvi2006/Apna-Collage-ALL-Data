const arr=["Raju ","Kumar ","Mandal"];
function concate(array){
let name="";
for(let i=0;i<array.length;i++)
{
    name+=array[i];
}
return name;
}

console.log(concate(arr));
