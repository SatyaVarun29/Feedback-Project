import React from "react";

const Button = ({ children, type, version, isdisabled}) => {
  return (
    <button type={type} className={`btn btn-${version}`} 
    disabled={isdisabled}>
      {children}
    </button>
  );
};

// Button.defaultProps={
//     version:'primary',
//     isdisabled:false,
//     type:"button",
// }
export default Button;
