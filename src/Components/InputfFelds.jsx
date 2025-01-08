import React from "react";

const InputfFelds = (props) => {
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

export default InputfFelds;
