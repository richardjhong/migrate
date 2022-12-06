import React from 'react';

const CountryList = ({ countries, title }) => {
  if (!countries.length) {
    return <h3>No Countries Retrieved From Database</h3>;
  }

  // skip over 0th index entry of countries which is effectively a header in 
  // in csv content
  const [headers, ...countryListings] = [...countries]

  return (
    <div>
      <h3>{title}</h3>
      {countryListings &&
        countryListings.map(country => {
          const { _id, ...countryProperties } = country
          return (
            <>
              <p>{countryProperties.country}</p>
              <p>{countryProperties.rank_score_spi}</p>
              <p>{countryProperties.status}</p>
              <p>{countryProperties.score_spi}</p>
              <p>{countryProperties.score_bhn}</p>

              {Object.keys(countryProperties.bhn).map(bhnKey => {
                return (
                  <p>
                    {bhnKey}: {countryProperties.bhn[bhnKey]}
                  </p>
                )
              })}

              <p>{countryProperties.score_fow}</p>
              {Object.keys(countryProperties.fow).map(fowKey => {
                return (
                  <p>
                    {fowKey}: {countryProperties.fow[fowKey]}
                  </p>
                )
              })}
              
              <p>{countryProperties.score_fow}</p>
              {Object.keys(countryProperties.opp).map(oppKey => {
                return (
                  <p>
                    {oppKey}: {countryProperties.opp[oppKey]}
                  </p>
                )
              })}
            </>
          )
        })
      }
    </div>
  );
};

export default CountryList;