import React from 'react';
import "./Button.css";

export default function Button({innerText, className}) {
    return (
        <button className={className}>
            {innerText}
        </button>
    )
}
