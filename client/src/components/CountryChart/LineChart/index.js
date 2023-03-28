import React from "react";
import { VictoryChart, VictoryAxis, VictoryLabel, VictoryLine, VictoryContainer, VictoryScatter, VictoryLegend } from "victory";
import '../CountryChart.scss';

const LineChart = ({
  fields, countryYearIndex, comparedCountryFields, comparisonEnabled, comparedCountry, currentSearchedCountry
}) => {
  return (
    <div className="chartContainer">
      <VictoryChart 
        height={600} 
        width={1000} 
        containerComponent={
          <VictoryContainer responsive={true}/>
        }
      >
        <VictoryLine
          labelComponent={
            <VictoryLabel 
              renderInPortal 
              dy={20} 
              dx={20} 
              textAnchor={({ text }) => text.length > 1 ? "start" : "middle"}
            />
          }
          style={{
            data: { stroke: "#022831" },
            parent: { border: "1px solid #ccc"},
          }}
          alignment="start"
          size={5}
          domain={{y: [0, 100]}}
          labels={({ datum }) => !comparisonEnabled ? datum.y : null}
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
        <VictoryScatter
          style={{
            data: {
              fill: ({ index }) => {
                return "#022831";
              },
              stroke: ({ index }) => {
                return "#022831";
              },
              strokeWidth: ({ index }) => {
                return parseInt(index) === parseInt(countryYearIndex) ? 10 : 1
              },
            },
          }}
          data={[
            { x: "2013", y: fields["2013"]},
            { x: "2014", y: fields["2014"] },
            { x: "2015", y: fields["2015"] },
            { x: "2016", y: fields["2016"] },
            { x: "2017", y: fields["2017"] },
            { x: "2018", y: fields["2018"]},
            { x: "2019", y: fields["2019"] },
            { x: "2020", y: fields["2020"] },
            { x: "2021", y: fields["2021"] },
            { x: "2022", y: fields["2022"] },
          ]}
        />
        {/* 
        Conditional logic for loading additional line graph for comparison country
         */}
        {comparedCountryFields && comparisonEnabled && <VictoryLine
          labelComponent={
            <VictoryLabel 
              renderInPortal 
              dy={-20} 
              dx={20} 
              textAnchor={({ text }) => text.length > 1 ? "start" : "middle"}
            />
          }
          style={{
            data: { stroke: "#b4d330" },
            parent: { border: "1px solid #ccc"},
          }}
          alignment="start"
          size={5}
          domain={{y: [0, 100]}}
          data={[
            { x: "2013", y: comparedCountryFields["2013"]},
            { x: "2014", y: comparedCountryFields["2014"] },
            { x: "2015", y: comparedCountryFields["2015"] },
            { x: "2016", y: comparedCountryFields["2016"] },
            { x: "2017", y: comparedCountryFields["2017"] },
            { x: "2018", y: comparedCountryFields["2018"]},
            { x: "2019", y: comparedCountryFields["2019"] },
            { x: "2020", y: comparedCountryFields["2020"] },
            { x: "2021", y: comparedCountryFields["2021"] },
            { x: "2022", y: comparedCountryFields["2022"] },
          ]}
        />}
        {comparedCountryFields && comparisonEnabled && <VictoryScatter
          style={{
            data: {
              fill: ({ index }) => {
                return "#b4d330";
              },
              stroke: ({ index }) => {
                return "#b4d330";
              },
              strokeWidth: ({ index }) => {
                return parseInt(index) === parseInt(countryYearIndex) ? 10 : 1
              },
            },
          }}
          data={[
            { x: "2013", y: comparedCountryFields["2013"]},
            { x: "2014", y: comparedCountryFields["2014"] },
            { x: "2015", y: comparedCountryFields["2015"] },
            { x: "2016", y: comparedCountryFields["2016"] },
            { x: "2017", y: comparedCountryFields["2017"] },
            { x: "2018", y: comparedCountryFields["2018"]},
            { x: "2019", y: comparedCountryFields["2019"] },
            { x: "2020", y: comparedCountryFields["2020"] },
            { x: "2021", y: comparedCountryFields["2021"] },
            { x: "2022", y: comparedCountryFields["2022"] },
          ]}
        />}
        <VictoryAxis crossAxis
          label="Year"
        />
        <VictoryAxis dependentAxis crossAxis
          label="Score"
          tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        />  
        {comparedCountryFields && comparisonEnabled && <VictoryLegend x={700} y={475}
          title="Legend"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
          data={[
            { name: `${currentSearchedCountry}`, symbol: { fill: "#022831"} },
            { name: `${comparedCountry}`, symbol: { fill: "#b4d330" } },
          ]}
        />  } 
      </VictoryChart>
    </div>
  )
};

export default LineChart
 