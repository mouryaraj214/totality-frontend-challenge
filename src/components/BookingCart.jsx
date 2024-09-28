import React from 'react';
import { useBooking } from '../context/BookingContext';

const BookingCart = () => {
  const { cart, removeFromCart } = useBooking();

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="booking-cart">
      <h2>Your Booking Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.uniqueId} className="cart-item" style={styles.cartItem}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3>{item.title}</h3>
            <p>Price: ₹{ item.price}</p>
            <button onClick={() => removeFromCart(item.uniqueId)} style={styles.removeButton}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{ totalCost}</h3>
    </div>
  );
};
const styles = {
  cartItem: {
     borderRadius: '4px',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: 'white',
  },
  image: {
    width: '280px',
    height: 'auto',
    borderRadius: '4px',
    marginRight: '15px',
  },
  
  removeButton: {
    backgroundColor: '#dc3545', 
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '15px',
    marginLeft: '10px',
    marginBottom: '10px'
    
  },
};

export default BookingCart;
