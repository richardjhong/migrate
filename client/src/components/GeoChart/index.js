import React from 'react';
import Chart from 'react-google-charts';
import './GeoChart.scss';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { searchImage } from '../../utils/API';

const GeoChart = ({ onClose, countryYearIndex, setCountryYearIndex }) => {
  const geoCitiesInLocalStorage = localStorage.getItem('saved_geo_countries')
  let navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_COMPILATIONS, {
    skip: geoCitiesInLocalStorage
  });
  const { searches, addSearch } = useSearch();
  const countries = data?.countryCompilations || [];

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

  const savedGeoCountries = geoCitiesInLocalStorage ? JSON.parse(localStorage.getItem('saved_geo_countries')) : 
  {
    '2013': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2014': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2015': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2016': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2017': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2018': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2019': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2020': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2021': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]],
    '2022': [['Country', `SPI Rank (${countryYearIndexToYearMap[countryYearIndex]})`]], 
  };

  if (!geoCitiesInLocalStorage) { 
    countries.forEach(country => {
      country.year_catalog.forEach(individualYear => {
        if (individualYear.status === "Ranked") {
          switch(individualYear.spiyear) {
            case '2013':
              savedGeoCountries['2013'].push([country.countryname, country.year_catalog[0].rank_score_spi])
              break;
            case '2014':
              savedGeoCountries['2014'].push([country.countryname, country.year_catalog[1].rank_score_spi])
              break;
            case '2015':
              savedGeoCountries['2015'].push([country.countryname, country.year_catalog[2].rank_score_spi])
              break;
            case '2016':
              savedGeoCountries['2016'].push([country.countryname, country.year_catalog[3].rank_score_spi])
              break;
            case '2017':
              savedGeoCountries['2017'].push([country.countryname, country.year_catalog[4].rank_score_spi])
              break;
            case '2018':
              savedGeoCountries['2018'].push([country.countryname, country.year_catalog[5].rank_score_spi])
              break;
            case '2019':
              savedGeoCountries['2019'].push([country.countryname, country.year_catalog[6].rank_score_spi])
              break;
            case '2020':
              savedGeoCountries['2020'].push([country.countryname, country.year_catalog[7].rank_score_spi])
              break;
            case '2021':
              savedGeoCountries['2021'].push([country.countryname, country.year_catalog[8].rank_score_spi])
              break;
            case '2022':
              savedGeoCountries['2022'].push([country.countryname, country.year_catalog[9].rank_score_spi])
              break;
            default: 
              break;
          }
        }
      })
    })
    localStorage.setItem('saved_geo_countries', JSON.stringify(savedGeoCountries));
  }

  const searchCountryImages = async (country) => {
    const results = await searchImage(country);
      
      //if data doesn't exist in localStorage, save it to localStorage
    if (searches.findIndex(country => country.name === country) === -1) {
      await addSearch(results);
    }
  }

  const options = {
    colorAxis: { colors: ["#b4d330", "#6c998f"] },
    backgroundColor: "#81d4fa",
  };

  return (
    <div className="container">
      <h2 className="chart-title">Country SPI Rankings {countryYearIndexToYearMap[countryYearIndex]}</h2>
      <div className="chart-container">
        <div className="range">
          <input 
            type="range" 
            id="year-range-selector"
            className="vertical-slider"
            min="0" 
            max="9" 
            step="1" 
            defaultValue={countryYearIndex} 
            orient="vertical"
            onChange={(e) => setCountryYearIndex(e.target.value)}
          />
          <p id="rangeYearText">{countryYearIndexToYearMap[countryYearIndex]}</p> 
        </div> 
        <Chart
          width={'2000px'}
          height={'1500px'}
          chartType="GeoChart"
          data={savedGeoCountries[countryYearIndexToYearMap[countryYearIndex]]}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey={process.env.REACT_APP_GOOGLE_CHART_API_KEY}
          rootProps={{ 'data-testid': '1' }}
          options={options}
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const [region, spi_score] = savedGeoCountries[countryYearIndexToYearMap[countryYearIndex]][selection[0].row + 1]; 
                searchCountryImages(region);
                navigate(`/SingleCountry/${region}`);
                onClose();
              },
            },
          ]}    
        />
      </div>
    </div>
  );
}
export default GeoChart;