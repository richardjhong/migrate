import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryAxis, VictoryLabel, VictoryBar, VictoryContainer, VictorySelectionContainer } from "victory";
import '../CountryChart.scss';

const BarChart = ({
  fields, countryYearIndex
}) => {

  return (
    <div className="chartContainer">
      {console.log('countryYearIndex within chart: ', countryYearIndex)}
      <VictoryChart 
        height={600} 
        width={1000}
        containerComponent={
          <VictoryContainer responsive={true}/>
        }
        domainPadding={50}
       
      >
        <VictoryBar
          labelComponent={
            <VictoryLabel 
              renderInPortal 
              dy={-20} 
            
              textAnchor={({ text }) => text.length > 1 ? "start" : "middle"}
            />
          }
          style={{
            data: { 
              fill: "#04566e",
              stroke: "#b4d330",
              strokeWidth: 3
            },
            parent: { border: "1px solid #ccc"},
            
          }}
          size={5}
          domain={{y: [0, 100]}}
          labels={({ datum }) => datum.y}
          data={[
            { x: "2013", y: fields["2013"] },
            { x: "2014", y: fields["2014"] },
            { x: "2015", y: fields["2015"] },
            { x: "2016", y: fields["2016"] },
            { x: "2017", y: fields["2017"] },
            { x: "2018", y: fields["2018"] },
            { x: "2019", y: fields["2019"] },
            { x: "2020", y: fields["2020"] },
            { x: "2021", y: fields["2021"] },
            { x: "2022", y: fields["2022"] },
          ]}
        />
        <VictoryAxis crossAxis
          label="Year"
        />
        <VictoryAxis dependentAxis crossAxis
          label="Score"
          tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        />
        
      </VictoryChart>
    </div>
  )
};

export default BarChart


//fill: ({ index }) => {
//   console.log('index: ', index)
//   return index === countryYearIndex ? "tomato" : "gray"
// },
 