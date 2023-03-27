import React, { useEffect } from 'react';
import Chart from 'react-google-charts';
import './GeoChart.scss';
import { useNavigate } from 'react-router-dom';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { searchImage } from '../../utils/API';

const GeoChart = 
({ 
  onClose, 
  comparisonEnabled,
  countryYearIndex, 
  setCountryYearIndex, 
  currentSearchedCountry, 
  setCurrentSearchedCountry,
  setComparedCountry,
  setComparedCountryData,
}) => {
  const geoCitiesInLocalStorage = localStorage.getItem('saved_geo_countries')
  let navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_COMPILATIONS, {
    skip: geoCitiesInLocalStorage
  });
  const { searches, addSearch } = useSearch();
  const countries = data?.countryCompilations || [];
  const [delayedCompare, { loading: comparedCountryLoading, data: newComparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);

  useEffect(() => {
    if (!comparedCountryLoading && newComparedCountryData) {
      setComparedCountryData(newComparedCountryData?.singleCompileCountry?.year_catalog || [])
    }
  }, [comparedCountryLoading, newComparedCountryData, setComparedCountryData]);

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

  const savedGeoCountries = geoCitiesInLocalStorage ? JSON.parse(geoCitiesInLocalStorage) : 
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
          const newGeoData = [country.countryname, individualYear.rank_score_spi]
          savedGeoCountries[individualYear.spiyear].push(newGeoData);
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

  const filteredCountries = () => {
   return savedGeoCountries[countryYearIndexToYearMap[countryYearIndex]].filter(individualGeoData => {
      const [name, spi_score] = individualGeoData;
      return name !== currentSearchedCountry;
    })
  }

  return (
    <div className="container">
      <h2 className="chart-title">
       { comparisonEnabled ? `Comparing ${currentSearchedCountry} (${countryYearIndexToYearMap[countryYearIndex]}) to...`
        : `Country SPI Rankings ${countryYearIndexToYearMap[countryYearIndex]}`}
        </h2>
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
          width={'60vw'}
          height={'auto'}
          chartType="GeoChart"
          data={filteredCountries()}
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
                const [region, spi_score] = filteredCountries()[selection[0].row + 1]; 

                if (!comparisonEnabled) {
                  setCurrentSearchedCountry(region);
                  searchCountryImages(region);
                  navigate(`/SingleCountry/${region}`);
                  onClose();
                } else {
                  try {
                    setComparedCountry(region);
                    delayedCompare({ variables: { countryname: region }});
                    if (!comparedCountryLoading) {
                      onClose();
                    }
                  }
                  catch (err) {
                    console.error(err);
                  }
                }
              },
            },
          ]}    
        />
      </div>
    </div>
  );
}
export default GeoChart;