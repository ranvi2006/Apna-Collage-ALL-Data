
let str="asfdayvsghdvatsdtadvffaasgsgfds";
function removeDubli(s1){
const array=[];

    let dub="";
for(let i=0;i<s1.length;i++)
{
if(array.indexOf(s1[i])==-1)
{

    dub+=s1[i];
    array.push(s1[i]);
}
}
return dub;

}

console.log(removeDubli(str));
