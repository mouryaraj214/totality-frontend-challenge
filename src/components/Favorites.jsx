import React from 'react';
import { useBooking } from '../context/BookingContext';

const Favorites = () => {
  const { favorites } = useBooking();

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        favorites.map((property) => (
          <div key={property.id} className="favorite-property" style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
            <img src={property.image} alt={property.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{property.title}</h3>
            <p>Price: ${property.price}/night</p>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
