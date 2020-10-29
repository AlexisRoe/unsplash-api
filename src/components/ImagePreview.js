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
            // contentStorage.push(id);
            // localStorage.setItem(storageName, JSON.stringify(contentStorage));
            const newFavorites = [...contentStorage, id]; // if in array is an immutable value, push is not accessable
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            const newFavorites = contentStorage.filter((favorite) => favorite !== id);
            localStorage.setItem(storageName, JSON.stringify(newFavorites));
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
