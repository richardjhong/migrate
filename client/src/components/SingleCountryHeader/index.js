import React, { useState, useEffect } from 'react';
import './SingleCountryHeader.scss';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';


const SingleCountryHeader = () => {

  const { searches, countryImgs} = useSearch();
  console.log(searches,countryImgs);


  return (
    <>
      {/* <div className='singleCountHeadCont'> */}
      <div className="singleCountryHead">

        {countryImgs.map((val,i) => {
          return (
            <img
              key={i}
              className=""
              src={val.urls.regular}
              alt={val.alt_description}
            />
          );
        })}
      </div>
      <div className='singleCountryHeadTitle'>
        <h2 >{searches[0]}</h2>
      </div>
    </>
  );

};

export default SingleCountryHeader;
