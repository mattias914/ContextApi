import React from "react";
import { useHeartContext } from "../Context/HeartContext";
import jsonData from "../assets/photos.json";

const Favorites = () => {
  const { hearts } = useHeartContext();
  const likedPhotos = jsonData.photos.filter((photo) => hearts[photo.id]);
  return (
    <div className="fav">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {likedPhotos.map((photo) => (
          <div key={photo.id} className="container">
            <img src={photo.src.original} alt={photo.alt} className="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
