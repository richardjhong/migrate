import React from 'react';
import './Dropdown.scss'

const Dropdown = ({ countryYearIndex, setCountryYearIndex }) => {
  const years = {
    '2018': 0, 
    '2019': 1, 
    '2020': 2, 
    '2021': 3, 
    '2022': 4
  }
   
  return (
    <>
      <select
        onChange={((e) => setCountryYearIndex(years[e.target.value]))}
        value={countryYearIndex}
      >
        <option>Select year</option>
        {Object.keys(years).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;

// Remember to credit the following: https://www.robinwieruch.de/react-dropdown/