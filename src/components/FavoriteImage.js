import React from 'react';
import Button from './Button';
import './FavoriteImage.css';

function FavoriteImage({ photoId }) {
    return (
        <div className='favoriteContainer'>
            <Button className='favoriteBtn-small' /*onClick={() => setFavorite(photoID)}*/>
                ❤️
            </Button>
            {/* <img className='Image-small' src={`https://source.unsplash.com/${photoId}/800x600`} alt="favoriteOne"/> */}
            <img className='Image-small' src={`https://source.unsplash.com/n1B2cBi141U/800x600`} alt="favoriteOne"/>
        </div>
    );
}

export default FavoriteImage;
