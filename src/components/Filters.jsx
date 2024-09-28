import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleFilterChange = () => {
    onFilter({ location, priceRange, bedrooms });
  };

  const handleApplyFilters = () => {
    handleFilterChange(); // Call the function to apply filters
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className='filter-sec'>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <button onClick={handleApplyFilters} style={styles.applyButton}>
        Apply Filters
      </button>
      </div>
      
    </div>
  );
};

const styles = {
  applyButton: {
    backgroundColor: '#28a745', 
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '50px',
    transition: 'background-color 0.3s ease',
  },
};

export default Filters;
