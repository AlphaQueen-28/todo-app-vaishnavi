import React from "react";
import { buttonStyle } from "../Styles/style";

const Button = (props) => {
  const { text, ownStyle, handleOnClick, ...rest } = props;

  return (
    <button
      style={{
        ...buttonStyle,
        ...ownStyle,
      }}
      onClick={handleOnClick}
      {...rest}
    >
      {text}
    </button>
  );
};
export default Button;
