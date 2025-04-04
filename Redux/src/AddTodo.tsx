import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './app/sclice/todoSclice';

export default function AddTodo() {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    function handleInput(e: React.FormEvent<HTMLFormElement>) {
        setTask(e.target.value);
        // console.log(task);
    }

    function handleAddTodo(e: FocusEvent<HTMLFormElement>) {
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={task}
                onChange={handleInput}
            />
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    )
}
