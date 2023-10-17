import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import propertiesData from '../db.json';  // Adjust the import path

const Properties_list = ({ onClose }) => {
  
  const hotelPropertiesList = propertiesData.hotels
  .map(hotel => hotel.properties_list)
  
  const properties = hotelPropertiesList.map(property => property);

console.log("propertiesData",propertiesData)
console.log("hotelPropertiesList",hotelPropertiesList)
console.log("properties",properties)


  return (
    <div className="App">
      {propertiesData.hotels.map(hotel => hotel.properties_list.id)}

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Properties_list;





