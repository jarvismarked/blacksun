// NavigationLink.js
import React from "react";

const NavigationLink = ({ name, dataName, isActive, handleClick }) => {
  return (
    <div
      className={`nav-item ${isActive ? "active" : ""}`}
      data-name={dataName}
      onClick={handleClick} // Chuyển sự kiện click xuống từng đối tượng
    >
      {name}
    </div>
  );
};

export default NavigationLink;
