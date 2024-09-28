import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

const Reviews = ({ propertyId }) => {
  const { reviews, addReview } = useBooking();
  const [reviewText, setReviewText] = useState('');
  const [username, setUsername] = useState('');

 
  const propertyReviews = reviews.filter((rev) => rev.propertyId === propertyId);

  const handleAddReview = (e) => {
    e.preventDefault();

    
    const user = username || 'Anonymous';

   
    addReview(propertyId, user, reviewText);

    
    setReviewText('');
    setUsername('');
  };

  return (
    <div className="reviews-section">
      <h3>Reviews</h3>
      <form onSubmit={handleAddReview}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name (optional)"
          style={{ width: '100%', marginBottom: '10px'  }}
        />
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write a review..."
          required
          style={{ width: '100%', marginBottom: '10px', borderRadius:'5px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '8px'
          }}
        >
          Submit Review
        </button>
      </form>

      {propertyReviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        propertyReviews.map((rev, index) => (
          <div key={index} className="review">
            <strong>{rev.user}</strong>
            <p>{rev.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
