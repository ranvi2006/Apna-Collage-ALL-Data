import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css"

export default function TodoList() {
    const [todoList, setTodoList] = useState([{task:"demoTask",id:uuidv4(),isDone:false}
        ,]);
    const [newTodo, setNewTodo] = useState("");

    function updateNewTodo(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        // console.log(e.target.value);
        setNewTodo(e.target.value);

    }

    function addTodo() {
        const ob={
            task:newTodo,
            id:uuidv4(),
            isDone:false
        }
        setTodoList((arr)=>{
            return [...arr,ob]
        });
        // console.log(todoList);
        
    }

    function deleteTodo(id:string)
    {
setTodoList((privTodo)=>todoList.filter((privTodo)=> privTodo.id!=id));
    }

    function upperCaseAll()
    {
        const newArray=todoList.map((todoList)=>{
            return {...todoList,task:todoList.task.toUpperCase()}
        });
        console.log(newArray);
        setTodoList(newArray);
    }
    function upperCaseOne(id:string)
    {
        const newArray=todoList.map((todoList)=>{
            if(todoList.id==id)
            {
                return {...todoList,task:todoList.task.toUpperCase()}
            }
            else
            {
                return todoList;
            }
        });
        console.log(newArray);
        setTodoList(newArray);
    }
    function markUpDone(id:string)
    {
        const newArray=todoList.map((todoList)=>{
            if(todoList.id==id)
            {
                return {...todoList,isDone:true}
            }
            else
            {
                return todoList;
            }
        });
        console.log(newArray);
        setTodoList(newArray);
    }



    return (
        <div className='.div'>
            <h3>Todo List</h3>
            <input type="text" placeholder='Enter new task here...' value={newTodo} onChange={updateNewTodo} />
            <button onClick={addTodo}>Add Task</button>
            <hr />
            <h4>Your Tasks</h4>
            <ol>
                {todoList.map((todo)=>{
                  return  <li style={{textDecoration:todo.isDone ?"line-through":"none",color: todo.isDone ?"red" :"green"}} key={todo.id}>{todo.task} <button onClick={()=>deleteTodo(todo.id)}>delete</button><button onClick={()=>markUpDone(todo.id)}>Done</button></li>
                })}
            </ol>

            <button onClick={upperCaseAll}> Chnage to Upper Case</button>

        </div>
    )
}
