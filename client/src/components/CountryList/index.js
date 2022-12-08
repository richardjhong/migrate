import React from 'react';
import Chart from '../CountryChart/index.js'

const CountryList = ({ countries, title }) => {
  if (!countries.length) {
    return <h3>No Countries Retrieved From Database</h3>;
  }

  // skip over 0th index entry of countries which is effectively a header in 
  // in csv content
  const [...countryListings] = [...countries]

  return (
    <div>
      <h3>{title}</h3>
      {countryListings &&
        countryListings.map(country => {
          const { _id, ...countryProperties } = country
          return (
            <>
              <p>country: {countryProperties.country}</p>
              <p>spiyear: {countryProperties.spiyear}</p>
              <p>rank_score_spi: {countryProperties.rank_score_spi}</p>
              <p>status: {countryProperties.status}</p>
              <p>score_spi: {countryProperties.score_spi}</p>
              <p>score_bhn: {countryProperties.score_bhn}</p>

              {Object.keys(countryProperties.bhn).map(bhnKey => {
                return (
                  <p>
                    {bhnKey}: {countryProperties.bhn[bhnKey]}
                  </p>
                )
              })}

              <p>score_fow: {countryProperties.score_fow}</p>
              {Object.keys(countryProperties.fow).map(fowKey => {
                return (
                  <p>
                    {fowKey}: {countryProperties.fow[fowKey]}
                  </p>
                )
              })}
              
              <p>score_opp: {countryProperties.score_opp}</p>
              {Object.keys(countryProperties.opp).map(oppKey => {
                return (
                  <p>
                    {oppKey}: {countryProperties.opp[oppKey]}
                  </p>
                )
              })}
            <Chart fields={countryProperties}/>
            </>
          )
        })
      }
    </div>
  );
};

export default CountryList;