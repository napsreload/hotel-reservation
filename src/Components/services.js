import React, { useState } from 'react';
import blog2 from '../assets/image/blog2.jpg';


const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ['Free Wi-Fi', 'car', 'pool', 'babysetting']; // Your list of items

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="Dropdown">
      {/* Use the image as a clickable button */}
      <img 
        src={blog2} 
        alt="Dropdown Icon" 
        className="dropdown-icon" 
        onClick={toggleDropdown} 
      />
      {/* Render the dropdown list if isOpen is true */}
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* Display the selected item */}
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
};

export default Services;