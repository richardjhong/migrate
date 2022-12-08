import React from "react";
import { VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine, VictoryContainer } from "victory";

const Chart = ({
  fields
}) => {
  return (
    <>
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
          labels={({ datum }) => datum.y}
          data={[
            { x: "2018", y: fields["2018"]},
            { x: "2019", y: fields["2019"] },
            { x: "2020", y: fields["2020"] },
            { x: "2021", y: fields["2021"] },
            { x: "2022", y: fields["2022"] }
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
    </>
  )
};

export default Chart;
 