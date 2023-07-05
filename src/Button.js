import React, {useState} from "react";

const Button = () => {
  // react variable - hover, count
  const [count, setCount] = useState(0);
  const [hovered, setHover] = useState(false);
  
  
  // prop functions to give action
  const handleClick = () => {
    setCount(count+1);
    console.log('Handle Click called');
  }
  
  const handleMouseEnter = () => {
    setHover(true);
    console.log('Mouse Enter Event');
  }
  
  const handleMouseLeave = () => {
    setHover(false);
    console.log('Mouse Leave Event');
  }
  
  const buttonStyle = {
    backgroundColor: hovered ? "blue" : "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  // style
  
  
  return (
    <button style = {buttonStyle}
     onClick={handleClick}
     onMouseEnter={handleMouseEnter} 
     onMouseLeave={handleMouseLeave}>Clicked {count} times</button>
  )
}

export default Button;