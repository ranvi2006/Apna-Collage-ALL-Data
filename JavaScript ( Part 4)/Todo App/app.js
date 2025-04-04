let todos=[];
let req=prompt("Please enter your request");

while(true)
{
    
    if(req=="quit")
    {
        console.log("closing the todo app.......");
        break;
    }
    if(req=="list")
    {
        for(todo of todos)
        {
           console.log(todo); 
        }
    }
    if(req=="add")
    {
        let task=prompt("add your task");
        todos.push(task);
        console.log("task added");
    }
    if(req=="delete")
    {  let task=prompt("enter task which you want to delete");
        let idx=todos.indexOf(task);
        console.log(idx);
        todos.splice(idx,1);
    }

    req=prompt("Please enter your request");

    
}