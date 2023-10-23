import React from 'react';

const Services = () => {
  const services = [
    'Free Wi-Fi',
    'Swimming Pool',
    'Fitness Center',
    'Room Service',
    'Restaurant',
    'Concierge',
    'Parking',
  ];

  return (
    <div>
      <h2>Common Hotel Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

