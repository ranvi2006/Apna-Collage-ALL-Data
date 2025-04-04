let students=["raju","Ranjan","loknath"];
let students1=["ram","mantu","prince"];


for(let i=0;i<students.length;i++)
    {
        
        console.log(students[i]);
    }
    console.log("after concat");
    let concatArray=students.concat(students1);
    

for(let i=0;i<concatArray.length;i++)
    {
        
        console.log(concatArray[i]);
    }

    console.log("after reverse");

    students1.reverse();

    for(let i=0;i<students.length;i++)
        {
            
            console.log(students1[i]);
        }
    
    
