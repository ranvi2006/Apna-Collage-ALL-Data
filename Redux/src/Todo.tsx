import React from 'react'

import { RootState } from "./app/store/store";
import { useSelector } from 'react-redux';
import { removeTodo,doneTodo } from './app/sclice/todoSclice';
import { useDispatch } from 'react-redux';
export default function Todo() {
 const dispatch=useDispatch();

    const todos = useSelector((state: RootState) => state.todos);
    // console.log(todos);

    function deleteTodo(e:React.MouseEvent<HTMLButtonElement>)
    {
        
        dispatch(removeTodo(e.target.id));
        console.log(todos);

    }
    function markDone(e:React.MouseEvent<HTMLButtonElement>)
    {
    
        dispatch(doneTodo(e.target.id));

    }
  return (
    <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.task} {todo.isDone ? "✅" : "❌"}
        <button id={todo.id} onClick={markDone}>done</button>&nbsp;&nbsp;<button onClick={deleteTodo} id={todo.id}>delete</button>
      </li>
    ))}
  </ul>
  )
}
