import "./FavoriteImageList.css";
import FavoriteImage from "./FavoriteImage";
import ReactDOM from "react-dom";

function FavoriteImageList({ photoIds }) {
  const imageList = photoIds.map((id) => (
    <FavoriteImage key={id.toString()} photoId={id} />
  ));

  return <div className="Favorite-Container">{imageList}</div>;
}

export default FavoriteImageList;
