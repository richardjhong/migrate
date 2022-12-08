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
              <p>{year_catalog[4].country}</p>
              {/* <p>{year_catalog[4].country}</p>
              <p>spiyear: {year_catalog[4].spiyear}</p>
              <p>rank_score_spi: {year_catalog[4].rank_score_spi}</p>
              <p>status: {year_catalog[4].status}</p>
              <p>score_spi: {year_catalog[4].score_spi}</p>
              <p>score_bhn: {year_catalog[4].score_bhn}</p>

              {Object.keys(year_catalog[4].bhn).map(bhnKey => {
                return (
                  <p>
                    {bhnKey}: {year_catalog[4].bhn[bhnKey]}
                  </p>
                )
              })}

              <p>score_fow: {year_catalog[4].score_fow}</p>
              {Object.keys(year_catalog[4].fow).map(fowKey => {
                return (
                  <p>
                    {fowKey}: {year_catalog[4].fow[fowKey]}
                  </p>
                )
              })}
              
              <p>score_opp: {year_catalog[4].score_opp}</p>
              {Object.keys(year_catalog[4].opp).map(oppKey => {
                return (
                  <p>
                    {oppKey}: {year_catalog[4].opp[oppKey]}
                  </p>
                )
              })} */}
            <Chart fields={chartData}/> 
            </>
          )
        })
      }
    </div>
  );
};

export default CountryList;