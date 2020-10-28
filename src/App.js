import './global.css';
import ImagePreview from './components/ImagePreview';
import { useState } from "react";
import Button from './components/Button';
import { getRandomImage } from './api/getRandomImage';

function App() {
    const [randomImage, setRandomImage] = useState(null);
    
    async function handleClick() {
        const randomImageResponse = await getRandomImage();
        setRandomImage(randomImageResponse);
    }

    return (
        <main>
            <Button
                innerText={'Get Random Image'}
                className={'buttonRandom'}
                buildImage={() => handleClick()}
            />
            {randomImage && (
            <ImagePreview
                src={randomImage.urls.regular}
                alt={randomImage.alt_description}
                author={randomImage.user.name}
            />
            )}
        </main>
    );
}

export default App;
