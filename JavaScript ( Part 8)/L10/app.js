//Spread method with object litrel


const array=[2,4,6,8,10];

function table(...args){
    for(let i=0;i<args.length;i++)
    {
        for(let j=1;j<=10;j++)
        {
            console.log(`${args[i]} x ${j} =${i*j}`);
        }
    }
    console.log("");
}

table(...array);