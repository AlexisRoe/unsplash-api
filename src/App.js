import "./global.css";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import ImagePreview from "./components/ImagePreview";
import Button from "./components/Button";
import FavoriteImage from "./components/FavoriteImage";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

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
      <FavoriteImageList
        photoIds={["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"]}
      />
      ;{/* <FavoriteImage photoId={'n1B2cBi141U'} /> */}
    </main>
  );
}

export default App;
