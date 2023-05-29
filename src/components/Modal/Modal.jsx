import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

Modal.setAppElement('#root');

const EnrollModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEnrollHtml = () => {
    // Perform enroll logic here
    navigate('/lessons');
    console.log('Enrolling in the course...');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="btn-yellow">
        Enroll
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal-overlay"
      >
        <div className="modal-content-1">
          <h2>Confirmation</h2>
          <p>Are you sure you want to enroll in this course?</p>
          <div>
            <button onClick={handleEnrollHtml}>Yes, enroll</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnrollModal;
