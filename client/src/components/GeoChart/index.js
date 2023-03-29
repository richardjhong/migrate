import React, { useEffect } from 'react';
import Chart from 'react-google-charts';
import './GeoChart.scss';
import { useNavigate } from 'react-router-dom';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_SINGLE_COMPILATION, QUERY_ME } from '../../utils/queries';
import { ADD_SEARCH_HISTORY } from '../../utils/mutations';
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
  comparedCountry,
  setComparedCountry,
  comparedCountryData,
  setComparedCountryData,
}) => {
  const geoCitiesInLocalStorage = localStorage.getItem('saved_geo_countries')
  let navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_COMPILATIONS, {
    skip: geoCitiesInLocalStorage
  });
  const { loading: loadingC, data: dataC } = useQuery(QUERY_ME);
  const { searches, addSearch } = useSearch();
  const countries = data?.countryCompilations || [];
  const [addCountry, { error }] = useMutation(ADD_SEARCH_HISTORY);
  const [delayedCompare, { loading: comparedCountryLoading, data: newComparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);

  useEffect(() => {
    if (!comparedCountryLoading && newComparedCountryData) {
      setComparedCountryData(newComparedCountryData?.singleCompileCountry?.year_catalog || [])
    }
  }, [comparedCountryLoading, newComparedCountryData, comparedCountryData, setComparedCountryData]);

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
  };

  const savedGeoCountries = geoCitiesInLocalStorage ? JSON.parse(geoCitiesInLocalStorage) : 
  {};

  if (!geoCitiesInLocalStorage) { 
    countries.forEach(country => {
      country.year_catalog.forEach(individualYear => {
        if (individualYear.status === "Ranked") {
          const newGeoData = [country.countryname, individualYear.rank_score_spi]
          savedGeoCountries[individualYear.spiyear] ? savedGeoCountries[individualYear.spiyear].push(newGeoData) :
          savedGeoCountries[individualYear.spiyear] = [['Country', `SPI Rank (${individualYear.spiyear})`], newGeoData];
        };
      });
    });
    localStorage.setItem('saved_geo_countries', JSON.stringify(savedGeoCountries));
  };

  const searchCountryImages = async (country) => {
    const results = await searchImage(country);
      
      //if data doesn't exist in localStorage, save it to localStorage
    if (searches.findIndex(country => country.name === country) === -1) {
      await addSearch(results);
    };
  };

  const options = {
    colorAxis: { colors: ["#b4d330", "#04566e"] },
    backgroundColor: "#94b0da",
  };

  const filteredCountries = () => {
   return savedGeoCountries[countryYearIndexToYearMap[countryYearIndex]]?.filter(individualGeoData => {
      const [name, spi_score] = individualGeoData;
      return name !== currentSearchedCountry;
    });
  };

  const handleSetCountry = async (region) => {
    if (!loadingC && dataC) {
      await addCountry({ variables: {userId: dataC?.me?._id, searchedCountries: region }});
    }
    setCurrentSearchedCountry(region);
    searchCountryImages(region);
    navigate(`/SingleCountry/${region}`);
    onClose();
  }
  const handleCompareClick = async (region) => {
    setComparedCountry(region);
    await delayedCompare({ variables: { countryname: region }});
    onClose();
  }

  return (
    <div className="container">
      <h2 className="chart-title">
       { comparisonEnabled ? `Comparing ${currentSearchedCountry} (${countryYearIndexToYearMap[countryYearIndex]}) to...`
        : `Country SPI Rankings ${countryYearIndexToYearMap[countryYearIndex]}`}
        </h2>
      <div className="chart-container">
        <div className="range-modal">
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
          <p id="rangeYearText-modal">{countryYearIndexToYearMap[countryYearIndex]}</p> 
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
                  handleSetCountry(region);
                } else {
                  handleCompareClick(region);
                }
              },
            }
          ]}    
        />
      </div>
    </div>
  );
}
export default GeoChart;