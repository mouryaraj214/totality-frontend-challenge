import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data'; 
const PropertyList = ({ filters }) => {
  const filteredProperties = properties.filter(property => {
    return (
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.priceRange || property.price <= filters.priceRange) &&
      (!filters.bedrooms || property.bedrooms >= filters.bedrooms)
    );
  });

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
