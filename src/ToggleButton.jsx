import React from "react";
import moonIcon from "./assets/moon.svg";
import sunIcon from "./assets/sun.svg";

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  cursor: "pointer",
  background: "transparent", 
  border: "none", 
};


const iconStyle = {
  width: "24px",
  height: "24px",
};


const ToggleButton = ({ isDarkMode, onClick }) => {
  return (
    <button onClick={onClick} style={buttonStyle}>
      {isDarkMode ? (
        <img src={moonIcon} alt="Moon Icon" style={iconStyle} />
      ) : (
        <img src={sunIcon} alt="Sun Icon" style={iconStyle} />
      )}
    </button>
  );
};




export default ToggleButton;
