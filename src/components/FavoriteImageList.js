import "./FavoriteImageList.css";
import FavoriteImage from "./FavoriteImage";
import ReactDOM from "react-dom";

function FavoriteImageList() {
  function ImageList({ photoIds }) {
    const imageList = photoIds.map((id) => (
      <FavoriteImage key={id.toString()} photoId={id} />
    ));

    return <div className="Favorite-Container">{imageList}</div>;
  }

  const photoIds = ["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"];
  ReactDOM.render(
    <ImageList photoIds={photoIds} />,
    document.querySelector("main")
  );
}

export default FavoriteImageList;
