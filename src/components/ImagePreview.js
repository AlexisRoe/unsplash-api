import React from 'react';
import Button from './Button';
import './ImagePreview.css';

export default function ImagePreview({ src, alt, author, id }) {
    const storageName = 'favorites';

    function setFavorite(id) {
        let contentStorage = null;
        try {
            contentStorage = JSON.parse(localStorage.getItem(storageName)) || [];
        } catch (error) {
            console.error(error);
            contentStorage = [];
        }
        if (!contentStorage.includes(id)) {
            contentStorage.push(id);
            // const newFavorites = [...contentStorage, id];
            // localStorage.setItem("favorites", JSON.stringify(newFavorites));
            localStorage.setItem(storageName, JSON.stringify(contentStorage));
        }
    }

    return (
        <div className='ImageContainer'>
            <Button className='favoriteBtn' onClick={() => setFavorite(id)}>
                ❤️
            </Button>
            <img className='Image' src={src} alt={alt} />
            <p className='ImageAuthor'>Author: {author}</p>
        </div>
    );
}
