import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState={
    todos:[
        { id: 1, task: "Learn React", done: false },
        { id: 2, task: "Build a Zerodha Clone", done: false },
        { id: 3, task: "Master JavaScript", done: false },
      ]
};

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // add todo
        // delete todo
        // mark as Done todo

        addTodo:(state,action)=>{
            const newTodo={
                id:uuidv4(),
                task:action.payload,
                isDone:false
            }
            state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!=action.payload);
        },
        markAsDoneTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        }
    }
});

export const {addTodo,deleteTodo,markAsDoneTodo}=todoSlice.actions;
export default todoSlice.reducer;