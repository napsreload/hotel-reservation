import React, { useState } from 'react';
import Properties_list from './properties_list';

const AppFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleModal}>
        Open Filter Form
      </button>

      {isModalOpen && <Properties_list onClose={toggleModal} />}
    </div>
  );
};

export default AppFilter;
