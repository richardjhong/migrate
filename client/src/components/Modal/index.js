import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GeoChart from '../GeoChart';
import Dropdown from '../Dropdown';


import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
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
      <Dropdown 
        options={
            [
                {value: '', text: 'Select year', disabled: true},
                {value: 0, text: '2013'},
                {value: 1, text: '2014'},
                {value: 2, text: '2015'},
                {value: 3, text: '2016'},
                {value: 4, text: '2017'},
                {value: 5, text: '2018'},
                {value: 6, text: '2019'},
                {value: 7, text: '2020'},
                {value: 8, text: '2021'},
                {value: 9, text: '2022'},
              ]
        }
    />
      <GeoChart onClose={onClose}/>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('portal-container'));
};

export default Modal;