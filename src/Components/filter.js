import React, { useState } from 'react';
import Properties_list from './properties_list';

const AppFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('isModalOpen:', !isModalOpen); // Check the updated value of isModalOpen
  };

  console.log('Rendering AppFilter. isModalOpen:', isModalOpen); // Check the current value of isModalOpen

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleModal}>
        Open Filter Form
      </button>

      {isModalOpen && <Properties_list />} {/* Render Properties_list if isModalOpen is true */}
    </div>
  );
};

export default AppFilter;

