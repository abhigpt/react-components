import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setCount(count + 1);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    backgroundColor: hovered ? "blue" : "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {count === 0
        ? "Click me!"
        : `Clicked ${count} time${count === 1 ? "" : "s"}`}
    </button>
  );
};

export default Button;
