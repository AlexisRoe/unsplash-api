import "./FavoriteImageList.css";
import FavoriteImage from "./FavoriteImage";

function FavoriteImageList({ photoIds }) {
  return (
    <div className="Favorite-Container">
      {photoIds.map((id) => (
        <FavoriteImage key={id.toString()} photoId={id} />
      ))}
    </div>
  );
}

export default FavoriteImageList;
