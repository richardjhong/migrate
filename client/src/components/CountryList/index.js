import React from 'react';
import LineChart from '../CountryChart/LineChart'

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
            "2013": year_catalog[0].score_bhn,
            "2014": year_catalog[1].score_bhn,
            "2015": year_catalog[2].score_bhn,
            "2016": year_catalog[3].score_bhn,
            "2017": year_catalog[4].score_bhn,
            "2018": year_catalog[5].score_bhn,
            "2019": year_catalog[6].score_bhn,
            "2020": year_catalog[7].score_bhn,
            "2021": year_catalog[8].score_bhn,
            "2022": year_catalog[9].score_bhn,
          }
          return (
            <>
              <p>{name}</p>
            <LineChart fields={chartData}/> 
            </>
          )
        })
      }
    </div>
  );
};

export default CountryList;