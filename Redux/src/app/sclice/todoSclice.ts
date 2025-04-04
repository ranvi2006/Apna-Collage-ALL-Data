import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string,
    task: string,
    isDone: boolean
}

const initialState: Todo[] = [{
    id: uuidv4(),
    task: "Demo task",
    isDone: false
}];

const todoSclice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {

            const newTask = {
                id: uuidv4(),
                task: action.payload,
                isDone: false
            }
            state.push(newTask);

        },
        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter((t) => t.id !== action.payload);

        },
        doneTodo:(state, action: PayloadAction<string>)=>
        {
            const todo = state.find((t) => t.id === action.payload);
            if(todo)
            {
                todo.isDone=true;
            }
        }
    }
}
);

export const { addTodo, removeTodo,doneTodo } = todoSclice.actions;
export default todoSclice.reducer;