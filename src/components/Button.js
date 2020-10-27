import React from 'react';
import "./Button.css";

export default function Button({innerText, className, buildImage}) {
    return (
        <button className={className} onClick={() => buildImage}>
            {innerText}
        </button>
    )
}
