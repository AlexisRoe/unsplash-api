// import React from 'react';

// export default function ImagePreview() {
//     return <></ >;
// }

import React from 'react';
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author }) {
    return (
        <div className="ImageContainer">
            <img  className="Image" src={src} alt={alt} />
            <p className="ImageAuthor" >Author: {author}</p>
        </div>
    );
}
