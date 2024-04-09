import React from 'react';
import PropTypes from 'prop-types';

function CustomButton({ backgroundColor, textColor, onClick, children, border }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${border}`,
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    maxWidth: '256px',
    width: '100%',
    boxSizing: 'border-box',
    padding: '8px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default CustomButton;