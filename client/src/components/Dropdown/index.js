import React, { useState } from 'react';
import './Dropdown.scss'

const Dropdown = ({ countryYearIndex, chartTypeIndex, setCountryYearIndex, setChartTypeIndex, affectedState, options }) => {
  const [selected, setSelected] = useState('');
   
  return (
    <>

      <select className='alignSelect'
        onChange={
          ((e) => {
            switch (affectedState) {
              case "year":
                setCountryYearIndex(e.target.value)
                setSelected(e.target.value)
                return
              case "chart":
                setChartTypeIndex(e.target.value)
                setSelected(e.target.value)
                return
              default: 
                return;
            }
          })
        }
        value={
          affectedState === 'year' ? countryYearIndex : chartTypeIndex
        }
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

