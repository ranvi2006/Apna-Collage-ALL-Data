import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeBG } from "./features/navbar/navbarSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.navbar.bg);

  function bgChange() {
    dispatch(changeBG());
  }

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const navStyle = {
    position: "sticky",
    top: "0",
    width: "100%",
    background: "linear-gradient(to right, #FF8C00, #D35400)", // 🔥 Deep Premium Orange Gradient
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    zIndex: 1000,
    borderRadius: "0 0 15px 15px",
  };

  const linkStyle = {
    color: "#fff",
    fontSize: "18px",
    margin: "0 20px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const toggleContainer = {
    width: "55px",
    height: "30px",
    background: "#fff",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: bg !== "white" ? "flex-end" : "flex-start",
    padding: "3px",
    cursor: "pointer",
    transition: "0.3s",
    border: "1px solid #fff",
  };

  const toggleButton = {
    height: "24px",
    width: "24px",
    borderRadius: "50%",
    background: bg === "white" ? "#D35400" : "#FFF",
    transition: "0.3s",
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Link to="/" style={{ ...linkStyle, fontWeight: "bold", fontSize: "22px" }}>
          <i className="fa fa-line-chart"></i> To-Do App
        </Link>

        <div style={{ flex: 1, textAlign: "center",display:"flex" }}>
          <Link className="nav-link" to="/" style={linkStyle}>
            <i className="fa fa-home"></i> Home
          </Link>
          <Link className="nav-link" to="/profile" style={linkStyle}>
            <i className="fa fa-user"></i> Profile
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ ...linkStyle, fontSize: "14px" }}>
            <i className="fa fa-clock"></i> {formattedTime}
          </span>
          <div style={toggleContainer} onClick={bgChange}>
            <div style={toggleButton}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
