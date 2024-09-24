import React from 'react';
import './Button.css';

const Button = ({ bgColor, color, text }) => {
    return (
        <button className="Btn" style={{ backgroundColor: bgColor, color: color }}>
            {text}
        </button>
    );
};

export default Button;
