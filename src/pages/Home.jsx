
import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import BookingCart from '../components/BookingCart';
import Filters from '../components/Filters';
import Navbar from '../components/Navbar';

const Home = () => {
  const [filters, setFilters] = useState({});

  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <Filters onFilter={handleFilter} />
        <div className="main-content">
          <PropertyList filters={filters} />
          <BookingCart />
        </div>
      </div>
    </div>
  );
};

export default Home;
