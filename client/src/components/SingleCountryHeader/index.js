
import React, { useState, useEffect } from 'react';
import './SingleCountryHeader.scss';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const SingleCountryHeader = () => {

  const { searches } = useSearch();
  const { countryname: countryParam } = useParams();
  const navigate = useNavigate();

  let index='';
  console.log(countryParam);
  console.log(searches);
  if(countryParam){

    index=searches.findIndex(country =>country.name===countryParam);
    console.log(index);
  }
  // if(index===-1){
  //   navigate('/', { replace: true });    
  // }


  return (
    <>
      {/* <div className='singleCountHeadCont'> */}
        <div className="singleCountryHead">

        {searches[index].imgs.map((val,i) => {
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
        <h2 >{searches[index].name}</h2>
          </div>
        </>
  );

};

export default SingleCountryHeader;
