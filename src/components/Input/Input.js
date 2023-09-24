import React from 'react';
import './Input.css';

function Input({ icon, ...props }) {
    return (
        <div className="input-container">
            {icon && <span className="input-icon">{icon}</span>}
            <input {...props} className="custom-input" />
        </div>
    );
}

export default Input;
