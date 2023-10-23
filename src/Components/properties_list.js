import React from 'react';
import Form from 'react-bootstrap/Form';
import propertiesData from '../db.json';

const Properties_list = ({ Display }) => {
  const hotelPropertiesList = propertiesData.hotels.map((hotel) => hotel.properties_list);

  console.log("propertiesData", propertiesData);
  console.log("hotelPropertiesList", hotelPropertiesList);

  return (
    <Form>
      {hotelPropertiesList.map((property, index) => (
        <div key={index} className="mb-3">
          {property.car_rental || property.Pool ? (
            <Form.Check type="checkbox" id={`check-api-${property.id}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label>{`Custom API ${property.id}`}</Form.Check.Label>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.Check>
          ) : null}
        </div>
      ))}

      <button onClick={Display} className="cus-btn">Display</button>
    </Form>
  );
};

export default Properties_list;

