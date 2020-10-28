import React from 'react';
import Button from './Button';
import './FavoriteImage.css';

function FavoriteImage() {

    const id = 'n1B2cBi141U';

    return (
        <div className='favoriteContainer'>
            <Button className='favoriteBtn-small' /*onClick={() => setFavorite(id)}*/>
                ❤️
            </Button>
            <img className='Image-small' src={`https://source.unsplash.com/${id}/800x600`} alt="favoriteOne"/>
        </div>
    );
}

export default FavoriteImage;
