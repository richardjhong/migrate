import React from "react";
import { render } from "react-dom";
import { VictoryChart, VictoryVoronoiContainer, VictoryContainer, VictoryAxis, VictoryTooltip, VictoryScatter, VictoryLine } from "victory";

const Chart = () => {
  return (
    

    <VictoryChart height={400} width={500}
      containerComponent={<VictoryContainer responsive={false}/>}
    >
    <VictoryLine
      labelComponent={<VictoryTooltip/>}
      style={{
        data: { stroke: "#c43a31" },
        parent: { border: "1px solid #ccc"}
      }}
      size={5}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
      domain={{y: [0, 100]}}
      label="Year"
      data={[
        { x: "2018", y: 79.73},
        { x: "2019", y: 79.66 },
        { x: "2020", y: 80.38 },
        { x: "2021", y: 79.76 },
        { x: "2022", y: 80.37 }
      ]}
    />
    <VictoryAxis crossAxis
      label="Year"
    />
    <VictoryAxis dependentAxis crossAxis
      label="Score"
      tickValues={[0, 20, 40, 60, 80, 100]}
    />
    </VictoryChart>
  )
};

export default Chart;
 