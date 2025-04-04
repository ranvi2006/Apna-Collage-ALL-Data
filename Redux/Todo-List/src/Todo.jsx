import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDoneTodo } from "./features/todo/todoSlice";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.navbar.bg); // Get background color from Redux

  function handleMarkDone() {
    dispatch(markAsDoneTodo(todo.id));
  }

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  const todoStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: bg, // Apply background from Redux
    color: bg === "black" ? "white" : "black", // Adjust text color
    width: "100%",
  };

  const buttonStyle = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "8px",
    fontSize: "14px",
  };

  return (
    <div style={todoStyle}>
      <span style={{ 
        textDecoration: todo.done ? "line-through" : "none",
        fontSize: "16px",
        fontWeight: todo.done ? "bold" : "normal",
        color: bg === "black" ? "#f0f0f0" : "#333",
      }}>
        {todo.task}
      </span>
      <div>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: todo.done ? "#28a745" : "#007bff",
            color: "#fff",
          }}
          onClick={handleMarkDone}
        >
          {todo.done ? "Undo" : "Done"}
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#dc3545",
            color: "#fff",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}