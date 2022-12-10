import React, { useState } from 'react';
import './Dropdown.scss'

const Dropdown = ({ countryYearIndex, setCountryYearIndex }) => {
  const [selected, setSelected] = useState('');

  const options = [
    {value: '', text: 'Select year', disabled: true},
    {value: 0, text: '2018'},
    {value: 1, text: '2019'},
    {value: 2, text: '2020'},
    {value: 3, text: '2021'},
    {value: 4, text: '2022'},
  ]
   
  return (
    <>
      
      <select className='alignSelect'
        onChange={
          ((e) => {
            setCountryYearIndex(e.target.value)
            setSelected(e.target.value)
          })
        }
        value={countryYearIndex}
      >
        {options.map(option => (
          <option
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;

// Remember to credit the following: https://www.robinwieruch.de/react-dropdown/