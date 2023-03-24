import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GeoChart from '../GeoChart';
import './Modal.scss';

const Modal = ({ message, isOpen, onClose, children }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(    
    <div className="modal">
      <span className="message">{message}</span>
      <GeoChart />
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('portal-container'));
};

export default Modal;