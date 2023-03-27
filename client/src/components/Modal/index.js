import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import GeoChart from '../GeoChart';
import './Modal.scss';

const Modal = 
({ 
  isOpen, 
  onClose, 
  countryYearIndex, 
  setCountryYearIndex, 
  currentSearchedCountry, 
  setCurrentSearchedCountry, 
  children 
}) => {
  const modalRef = useRef();

  // collapses modal on pressing ESC key
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  // collapses modal when clicking outside of geoChart/connected range input
  useEffect(() => {
    const outsideClick = e => {
      if (isOpen && !modalRef.current?.contains(e.target)) {
        onClose();
      }
    }
    document.body.addEventListener("click", outsideClick);
    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(    
    <div className="modal">
      <div className="modalElementsContainer" ref={modalRef}>
        <GeoChart onClose={onClose} countryYearIndex={countryYearIndex} setCountryYearIndex={setCountryYearIndex} currentSearchedCountry={currentSearchedCountry} setCurrentSearchedCountry={setCurrentSearchedCountry}/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('portal-container'));
};

export default Modal;