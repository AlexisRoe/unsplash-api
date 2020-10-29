import "./global.css";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import ImagePreview from "./components/ImagePreview";
import Button from "./components/Button";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const storageName = "favorites";
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  const [favoriteImg, setFavoriteImg] = useState([]);

  setFavoriteImg(function () {
    let photoIDs = null;
    try {
      photoIDs = JSON.parse(localStorage.getItem(storageName)) || [];
    } catch (error) {
      console.error(error);
      photoIDs = [];
    }
    return photoIDs;
  });

  return (
    <main id="mainContainer">
      <Button className={"buttonRandom"} onClick={() => handleClick()}>
        Get Random Image
      </Button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
      <FavoriteImageList photoIds={favoriteImg} />
    </main>
  );
}

export default App;
