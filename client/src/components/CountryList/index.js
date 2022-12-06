import React from 'react';

const CountryList = ({ countries, title }) => {
  if (!countries.length) {
    return <h3>No Countries Retrieved From Database</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {countries &&
        countries.map((country) => (
          <div key={country._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {country.country} 
            </h4>
            <div className="card-body bg-light p-2">
              <p>{country.rank_score_spi}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryList;
