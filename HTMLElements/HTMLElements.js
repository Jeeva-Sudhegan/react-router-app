import React, { forwardRef } from 'react';
import './HTMLElements.css';

export const Input = props => {
    const { nameRef, ...others } = props; 
    return(
        <div className = "input">
            <input 
                ref = { nameRef }
                { ...others }
                placeholder = { props.name } />
        </div>
    );
}

export const Button = props => {
    return(
        <div className = "input">
            <button { ...props }>{props.children}</button>
        </div>
    );
}

export const TextArea = props => {
    return (
        <div className = "input">
            <textarea {...props} />
        </div>
    );
}