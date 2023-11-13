// Gallery.js
import { useHeartContext } from "../Context/HeartContext";
import jsonData from "../assets/photos.json";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const photosData = jsonData.photos;
  const { hearts, toggleHeart } = useHeartContext();

  return (
    <div className="gallery grid-columns-5 p-3">
      {photosData.map((photo) => (
        <div key={photo.id} className="container">
          <img
            src={photo.src.original}
            alt={photo.alt}
            className={`photo ${hearts[photo.id] ? "liked" : ""}`}
            onClick={() => toggleHeart(photo.id)}
          />
          <div className="container-icon">
            <IconHeart photoId={photo.id} className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
