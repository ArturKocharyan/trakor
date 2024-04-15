import React from 'react';
import style from "./style.module.css"

function CustomButton({ backgroundColor, textColor, onClick, children, border, maxWidth,responsiveStyles }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${border}`,
    maxWidth: maxWidth,
  };

  return (
    <button className={style.custom_button} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
