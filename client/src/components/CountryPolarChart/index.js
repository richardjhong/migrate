import React from "react";
import { VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryBar } from "victory";


const PolarChart = ({
    fields
}) => {
    return (
        <div className="chartContainer">
            <VictoryChart polar
                theme={VictoryTheme.material}
            >
                {
                    ["fow", "bhn", "opp"].map((d, i) => {
                        return (
                            <VictoryPolarAxis dependentAxis
                                key={i}
                                label={d}
                                labelPlacement="perpendicular"
                                style={{ tickLabels: { fill: "none", fontSize:30, padding:25  } }}
                                axisValue={d}
                            />
                        );
                    })
                }
                <VictoryBar
                    style={{ 
                        data: { fill: "#b4d330", width: 130 },
                        labels:{
                            fontSize:250
                        }
                 }}
                    data={[
                        { x: "bhn", y: fields.bhn },
                        { x: "opp", y: fields.opp },
                        { x: "fow", y: fields.fow },
                    ]}
                    animate={{
                        duration: 2000,
                        easing: "bounce"
                      }}
                />
            </VictoryChart>
        </div>
    )
};

export default PolarChart;
