let array=["january","july","march","august"];
for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }

  array.splice(0,2,"july","june");
 
for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }


    let lang=["c","c++","html","javaScript","python","java","c#"];
    for(let i=0;i<lang.length;i++)
        {
            console.log(lang[i]);
        }

    console.log(lang.reverse().indexOf("javaScript"));
    console.log(lang.indexOf("java"));
