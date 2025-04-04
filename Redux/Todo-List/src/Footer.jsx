import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const bg = useSelector((state) => state.navbar.bg);
  const textColor = bg === "black" ? "white" : "black";

  return (
    <footer
      style={{
        backgroundColor: bg,
        padding: "15px",
        textAlign: "center",
        fontSize: "14px",
        color: textColor,
        borderTop: `2px solid ${textColor}`,
        width: "100%",
        bottom: "0",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      &copy; {new Date().getFullYear()} Zerodha Clone. All rights reserved.
    </footer>
  );
}
