
import React, { createContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]); // New state for reviews


  const addToCart = (property) => {
    const uniqueId = `${property.id}-${new Date().getTime()}`;
    setCart((prev) => [...prev, { ...property, uniqueId }]);
  };


  const removeFromCart = (uniqueId) => {
    setCart((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
  };

  const addToFavorites = (property) => {
    setFavorites((prev) => [...prev, property]);
  };


  const removeFromFavorites = (property) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== property.id));
  };

 
  const addReview = (propertyId, user, reviewText) => {
    const newReview = {
      id: `${propertyId}-${new Date().getTime()}`,
      propertyId,
      user,
      review: reviewText
    };
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart, favorites, addToFavorites, removeFromFavorites, reviews, addReview }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => React.useContext(BookingContext);
