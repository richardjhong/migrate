
import React, { useState, useEffect } from 'react';
import './SingleCountryHeader.scss';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const SingleCountryHeader = () => {

  const { searches } = useSearch();
  const { countryname: countryParam } = useParams();
  if(countryParam){
   
    const index=searches.indexOf(countryParam);
    console.log(index);

  }





  return (
    <>
      {/* <div className='singleCountHeadCont'> */}
        <div className="singleCountryHead">

        {searches[0].imgs.map((val,i) => {
              return (
                <img
                  key={i}
                  className=""
                  src={val.src}
                  alt={val.alt}
                />
              );
            })}
          </div>
          <div className='singleCountryHeadTitle'>
        <h2 >{searches[0].name}</h2>
          </div>
        </>
  );

};

export default SingleCountryHeader;
