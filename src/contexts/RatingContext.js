import React, { createContext, useState, useContext } from "react";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState({}); // { screenName: rating }

  const updateRating = (screenName, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [screenName]: rating,
    }));
  };

  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = () => useContext(RatingContext);
