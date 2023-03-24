import React from 'react';
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';


const GeoChart = ({ onClose }) => {
  let navigate = useNavigate();
  const geoData = [
    ['Country', 'SPI Rank'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['Russia', 700],
    ['South Korea', 500]
  ]

  return (
    <div className="container mt-5">
      <h2>React Gauge Chart Example</h2>
      <Chart
        width={'200%'}
        height={'200%'}
        chartType="GeoChart"
        data={geoData}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey={process.env.GOOGLE_CHART_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const [region, spi_score] = geoData[selection[0].row + 1];
              
              console.log("Selected : " + region);
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