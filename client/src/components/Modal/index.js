import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(    
    <div className="modal">
      <span className="message">{message}</span>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('portal-container'));
};

export default Modal;