import React, { useState } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const bg = useSelector((state) => state.navbar.bg);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  function handleOnChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      dispatch(addTodo(newTask));
      setNewTask("");
    }
  }

  const pageStyle = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #FF8C00, #D35400)", // 🔥 Premium Orange Gradient
    padding: "20px",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "600px",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: bg === "black" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)", // Glassmorphism Effect
    backdropFilter: "blur(10px)",
    textAlign: "center",
    color: bg === "black" ? "white" : "black",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)", // 🔹 Soft shadow
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ marginBottom: "15px", color: "#FF4500" }}>To-Do List</h2>

        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleOnChange}
          style={{
            padding: "12px",
            width: "70%",
            borderRadius: "8px",
            border: "2px solid #FF4500",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "12px 20px",
            border: "none",
            backgroundColor: "#FF4500",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Add Task
        </button>

        <div style={{ marginTop: "20px" }}>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
