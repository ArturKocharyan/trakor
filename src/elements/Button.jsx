import React from 'react';

function CustomButton({ backgroundColor, textColor, onClick, children, border, maxWidth }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${border}`,
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    maxWidth: maxWidth,
    width: '100%',
    boxSizing: 'border-box',
    padding: '8px',
    height: "56px", 
  
    
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;