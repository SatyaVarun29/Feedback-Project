import React from "react";

const Header = ({ text }) => {
  const headerStyle = {
    color: "#ff6a95",
    backgroundColor: "rgba(0,0,0,0.4)",
  };
  return (
    <header style={headerStyle}>
        <div  className="container" >

      <h2>{text}</h2>
        </div>
        
    </header>

  );
};

export default Header;
