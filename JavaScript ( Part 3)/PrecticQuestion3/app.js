let array=["january","july","march","august"];
for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }

  array.shift();
  array.shift();
  array.unshift("june");
  array.unshift("july");
for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }
