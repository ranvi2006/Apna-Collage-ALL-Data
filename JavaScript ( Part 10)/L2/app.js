let btn=document.querySelectorAll("button");

for(let i=0;i<btn.length;i++)
{
    btn[i].onclick=sayHello;

    btn[i].onmouseenter=print;
}

function print()
{
    console.log("you have clicked a button");
}
function sayHello()
{
alert("you enter button");

}