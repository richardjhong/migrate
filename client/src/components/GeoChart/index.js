import React from 'react';
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';

const GeoChart = ({ onClose, countryYearIndex }) => {
  let navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_COMPILATIONS);

  const countries = data?.countryCompilations || [];

  const geoDataObj = {
    '2013': [['Country', 'SPI Rank']],
    '2014': [['Country', 'SPI Rank']],
    '2015': [['Country', 'SPI Rank']],
    '2016': [['Country', 'SPI Rank']],
    '2017': [['Country', 'SPI Rank']],
    '2018': [['Country', 'SPI Rank']],
    '2019': [['Country', 'SPI Rank']],
    '2020': [['Country', 'SPI Rank']],
    '2021': [['Country', 'SPI Rank']],
    '2022': [['Country', 'SPI Rank']],    
  }

  const countryYearIndexToYearMap = {
    '0': '2013',
    '1': '2014',
    '2': '2015',
    '3': '2016',
    '4': '2017',
    '5': '2018',
    '6': '2019',
    '7': '2020',
    '8': '2021',
    '9': '2022'
  }

  const columns = ["Country", "SPI Rank"];

  countries.forEach(country => {
    country.year_catalog.forEach(individualYear => {
      if (individualYear.status === "Ranked") {
        switch(individualYear.spiyear) {
          case '2013':
            geoDataObj['2013'].push([country.countryname, country.year_catalog[0].rank_score_spi])
            break;
          case '2014':
            geoDataObj['2014'].push([country.countryname, country.year_catalog[1].rank_score_spi])
            break;
          case '2015':
            geoDataObj['2015'].push([country.countryname, country.year_catalog[2].rank_score_spi])
            break;
          case '2016':
            geoDataObj['2016'].push([country.countryname, country.year_catalog[3].rank_score_spi])
            break;
          case '2017':
            geoDataObj['2017'].push([country.countryname, country.year_catalog[4].rank_score_spi])
            break;
          case '2018':
            geoDataObj['2018'].push([country.countryname, country.year_catalog[5].rank_score_spi])
            break;
          case '2019':
            geoDataObj['2019'].push([country.countryname, country.year_catalog[6].rank_score_spi])
            break;
          case '2020':
            geoDataObj['2020'].push([country.countryname, country.year_catalog[7].rank_score_spi])
            break;
          case '2021':
            geoDataObj['2021'].push([country.countryname, country.year_catalog[8].rank_score_spi])
            break;
          case '2022':
            geoDataObj['2022'].push([country.countryname, country.year_catalog[9].rank_score_spi])
            break;
          default: 
            break;
        }
      }
    })
  })

  return (
    <div className="container">
      <h2>Country SPI Rankings {countryYearIndexToYearMap[countryYearIndex]}</h2>
      <Chart
        width={'2000px'}
        height={'1500px'}
        chartType="GeoChart"
        // data={geoDataObj[countryYearIndexToYearMap[countryYearIndex]]}
        data={geoDataObj[countryYearIndexToYearMap[countryYearIndex]]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey={process.env.REACT_APP_GOOGLE_CHART_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        // columns={columns}
        // rows={geoDataObj[countryYearIndexToYearMap["9"]]}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const [region, spi_score] = geoDataObj[countryYearIndexToYearMap[countryYearIndex]][selection[0].row + 1];              
              navigate(`/SingleCountry/${region}`);
              onClose();
            },
          },
        ]}    
      />
    </div>
  );
}
export default GeoChart;