
import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

const Checkout = () => {
  const { cart } = useBooking();
  const [contactInfo, setContactInfo] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    
    alert(`Checkout successful! Total Cost: $${totalCost}`);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <input 
        type="text" 
        placeholder="Enter your contact information"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Enter payment details"
        value={paymentInfo}
        onChange={(e) => setPaymentInfo(e.target.value)}
      />
      <h3>Total: {totalCost}</h3>
      <button className="button" onClick={handleCheckout}>Confirm Booking</button>
    </div>
  );
};

export default Checkout;
