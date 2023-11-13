import React, { createContext, useContext, useState } from "react";

const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [hearts, setHearts] = useState({});
  const toggleHeart = (photoId) => {
    setHearts((prevHearts) => ({
      ...prevHearts,
      [photoId]: !prevHearts[photoId],
    }));
  };
  return (
    <HeartContext.Provider value={{ hearts, toggleHeart }}>
      {children}
    </HeartContext.Provider>
  );
};

export const useHeartContext = () => {
  return useContext(HeartContext);
};
