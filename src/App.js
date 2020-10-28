import './global.css';
import { useState } from "react";
import { getRandomImage } from './api/getRandomImage';
import ImagePreview from './components/ImagePreview';
import Button from './components/Button';
import FavoriteImage from './components/FavoriteImage';

function App() {
    const [randomImage, setRandomImage] = useState(null);
    
    async function handleClick() {
        const randomImageResponse = await getRandomImage();
        setRandomImage(randomImageResponse);
    }

    return (
        <main>
            <Button
                className={'buttonRandom'}
                onClick={() => handleClick()}
            >Get Random Image</Button>
            {randomImage && (
            <ImagePreview
                src={randomImage.urls.regular}
                alt={randomImage.alt_description}
                author={randomImage.user.name}
                id={randomImage.id}
            />
            )}
            <div>
                <FavoriteImage 
                    id={"n1B2cBi141U"}
                />
            </div>
        </main>
    );
}

export default App;
