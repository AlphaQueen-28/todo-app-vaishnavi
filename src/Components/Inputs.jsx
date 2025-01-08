import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      style={props.style}
      //   onChange={props.handleOnChange}
      onChange={props.handleOnChange}
      {...props}
    />
  );
};
export default Input;
