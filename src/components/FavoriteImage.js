import React from "react";
import Button from "./Button";
import "./FavoriteImage.css";
import getFavorites from "../api/getFavorites";

function FavoriteImage({ photoId }) {
  function deleteFavorite(photoId) {
    const storageName = "favorites";
    const newFavorites = getFavorites().filter(
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
