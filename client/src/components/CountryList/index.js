import React from 'react';
import Chart from '../CountryChart/index.js'

const CountryList = ({ compilations, title }) => {
  if (!compilations.length) {
    return <h3>No Countries Retrieved From Database</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {compilations &&
        compilations.map(countryCatalog => {
          const { name, year_catalog} = countryCatalog
          const chartData = {
            "2018": year_catalog[0].score_bhn,
            "2019": year_catalog[1].score_bhn,
            "2020": year_catalog[2].score_bhn,
            "2021": year_catalog[3].score_bhn,
            "2022": year_catalog[4].score_bhn,
          }
          return (
            <>
              <p>{name}</p>
            <Chart fields={chartData}/> 
            </>
          )
        })
      }
    </div>
  );
};

export default CountryList;