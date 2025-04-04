import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice"; // Fix the import typo
import navbarSlice  from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer:{ todo: todoSlice,
    navbar:navbarSlice
   }, // Wrap inside an object with a key (e.g., "todos")
});
