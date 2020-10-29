import React from "react";
import Button from "./Button";
import "./FavoriteImage.css";

function FavoriteImage({ photoId }) {
  const storageName = "favorites";

  function deleteFavorite(photoId) {
    let contentStorage = null;
    try {
      contentStorage = JSON.parse(localStorage.getItem(storageName)) || [];
    } catch (error) {
      console.error(error);
      contentStorage = [];
    }
    const newFavorites = contentStorage.filter(
      (favorite) => favorite !== photoId
    );
    localStorage.setItem(storageName, JSON.stringify(newFavorites));
  }

  return (
    <div className="favorite">
      <Button
        className="favoriteBtn-small"
        onClick={() => deleteFavorite(photoId)}
      >
        ❤️
      </Button>
      <img
        className="Image-small"
        src={`https://source.unsplash.com/${photoId}`}
        alt="favoriteOne"
      />
    </div>
  );
}

export default FavoriteImage;
