import React from 'react';
import { useBooking } from '../context/BookingContext';
import Reviews from './Reviews';

const PropertyCard = ({ property }) => {
  const { addToCart, favorites, addToFavorites, removeFromFavorites } = useBooking();
  const isFavorite = favorites.some(fav => fav.id === property.id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(property);
    } else {
      addToFavorites(property);
    }
  };

  return (
    <div className="property-card" style={styles.cardContainer}>
      <img src={property.image} alt={property.title} style={styles.image} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ₹{property.price}/night</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>

      <button
        onClick={() => addToCart(property)}
        style={styles.bookNowButton}
        onMouseOver={(e) => (e.target.style.background = 'linear-gradient(90deg, #56ab2f, #a8e063)')}
        onMouseOut={(e) => (e.target.style.background = 'linear-gradient(90deg, #a8e063, #56ab2f)')}
      >
        Book Now
      </button>

      <button
        onClick={handleAddToFavorites}
        style={isFavorite ? styles.favoriteButtonActive : styles.favoriteButton}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <Reviews propertyId={property.id} />
    </div>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  bookNowButton: {
    background: 'linear-gradient(90deg, #a8e063, #56ab2f)',
    color: '#fff',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    marginBottom: '10px', 
    marginRight:'5px',
  },
  favoriteButton: {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '15px',
    marginRight: '10px',
  },
  favoriteButtonActive: {
    backgroundColor: '#ff4081',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  }
};

export default PropertyCard;
