import React from 'react';
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';

const GeoChart = ({ onClose }) => {
  let navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_COMPILATIONS);

  const countries = data?.countryCompilations || [];

  const geoData = [['Country', 'SPI Rank']];

  countries.forEach(country => {
    geoData.push([country.countryname, country.year_catalog[9].rank_score_spi])
  })

  return (
    <div className="container mt-5">
      <h2>React Gauge Chart Example</h2>
      <Chart
        width={'2000px'}
        height={'1500px'}
        chartType="GeoChart"
        data={geoData}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey={process.env.REACT_APP_GOOGLE_CHART_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const [region, spi_score] = geoData[selection[0].row + 1];              
              navigate(`/SingleCountry/${region}`);
              onClose();
            },
          },
        ]}    
      />
    </div>
  )
  
}
export default GeoChart