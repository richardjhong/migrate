import React, { useState, useRef } from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
import LineChart from '../CountryChart/LineChart'
import BarChart from '../CountryChart/BarChart'
import AreaChart from '../CountryChart/AreaChart'
import {columnData} from "../../utils/countryCardData";
import { valueFromAST } from "graphql";

gsap.registerPlugin(Flip);

const expand = (event) => {
    let box = event.target.closest('.countryCard');
    const flipTargets = document.querySelectorAll(".flex-container, .countryCard");
    const state = Flip.getState(flipTargets);
    let boxOrder = box.dataset.column;
    // All of the positioning logic to set the end state
    const lastExpanded = document.querySelector(".wide");
    if (lastExpanded) {
        lastExpanded.classList.remove("wide");
        gsap.set(lastExpanded, { clearProps: "order" });
        
        // change order number of selected box to -1 to move to top of page (probably could be refactored)
        if (!box.isSameNode(lastExpanded)) {
            gsap.set(box, { order: -1 });
            box.classList.add("wide");
            
        }
    } else {
        gsap.set(box, { order: -1 });
        box.classList.add("wide");
        
    }
    //move scroll bar with  selected box
    let jumpY = box.getBoundingClientRect();
    window.scroll({ top: jumpY.y, left: 0, behavior: 'smooth' });


    // Animate from the initial state to the end state!

    Flip.from(state, {
        duration: 1,
        nested: true,
        scale: true,
    });


}


export default function CountryCards({ 
        countryProperties, 
        countryYearIndex, 
        chartTypeIndex, 
        comparedCountryProperties,
        comparisonEnabled,
        comparedCountry,
        currentSearchedCountry
    }) {
    let ref1 = useRef(null);
    let ref2 = useRef(null);
    let ref3 = useRef(null);
    let ref4 = useRef(null);
    let ref5 = useRef(null);
    let ref6 = useRef(null);
    let ref7 = useRef(null);
    let ref8 = useRef(null);
    let ref9 = useRef(null);
    let ref10 = useRef(null);
    let ref11 = useRef(null);
    let ref12 = useRef(null);
    const [toggle, setToggle] = useState(false);

    return (
        <>
            
                {
                    [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12].map((d, i) => {
                        return (
                            <div key={i}
                                className="countryCard"
                                ref={d}
                                id={`col${i%3 + 1}row${Math.floor(i/3) + 1}`}
                                data-name={`col${i%3 + 1}row${Math.floor(i/3) + 1}`}
                                onClick={(event) => {
                                    expand(event)
                                    setToggle(!toggle)
                                }}
                                data-column={`${i+1}`}
                            >
                                { d?.current?.classList?.contains('wide') ?
                               
                                    (<>
                                        <section className='expandedCardInfo'>
                                            <div className='cardIcon'>
                                                <img src={columnData[i].ImgSrc} alt={columnData[i].ImgAlt} />
                                            </div>
                                            <div className='cardTitle'>
                                                <h3>{columnData[i].src.h3}</h3>
                                                <p className='cardValue'>{(countryProperties[countryYearIndex][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`]).toString()}</p>
                                            </div>
                                            <h4 className="expandedDivider">Scores based on...</h4>
                                            <ul>
                                                {
                                                    columnData[i].description.map((val,i) =>{
                                                        return(
                                                            <li key={i}>{val}</li>
                                                        )
                                                    })
                                                }
                                               
                                            </ul>

                                            <p className='clickHere'>Click to close...</p>

                                        </section>

                                        <div className='expandedChartArea'>     
                                            {(() => {
                                                const fields = {
                                                    "2013": countryProperties[0][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2014": countryProperties[1][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2015": countryProperties[2][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2016": countryProperties[3][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2017": countryProperties[4][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2018": countryProperties[5][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2019": countryProperties[6][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2020": countryProperties[7][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2021": countryProperties[8][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2022": countryProperties[9][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                }

                                                const comparedFields = comparedCountryProperties.length > 0 ? 
                                                    {
                                                        "2013": comparedCountryProperties[0][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2014": comparedCountryProperties[1][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2015": comparedCountryProperties[2][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2016": comparedCountryProperties[3][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2017": comparedCountryProperties[4][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2018": comparedCountryProperties[5][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2019": comparedCountryProperties[6][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2020": comparedCountryProperties[7][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2021": comparedCountryProperties[8][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                        "2022": comparedCountryProperties[9][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    } :
                                                    null
                                                
                                                
                                                switch(chartTypeIndex) {
                                                    case('Bar'):
                                                        return (
                                                            <BarChart 
                                                            fields={fields} countryYearIndex={countryYearIndex}
                                                            />
                                                        )
                                                    case('Line'):
                                                        return (
                                                            <LineChart 
                                                                fields={fields} 
                                                                countryYearIndex={countryYearIndex}
                                                                comparedCountryFields={comparedFields}
                                                                comparisonEnabled={comparisonEnabled}
                                                                comparedCountry={comparedCountry}
                                                                currentSearchedCountry={currentSearchedCountry}
                                                            />
                                                        )
                                                    case('Area'):
                                                        return (
                                                            <AreaChart 
                                                            fields={fields} countryYearIndex={countryYearIndex}
                                                            />
                                                        )
                                                    default: 
                                                        return;
                                                }
                                            })()}
                                        </div>
                                    </>)
                                    :
                                    (<>

                                        <div className='cardIcon'>
                                            <img src={columnData[i].ImgSrc} alt={columnData[i].ImgAlt} />
                                        </div>
                                        <div className='cardTitle'>
                                            <h3>{columnData[i].src.h3}</h3>
                                            <p className='cardValue'>{(countryProperties[countryYearIndex][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`]).toString()}</p>
                                            <p className='clickHere'>Click to see more...</p>
                                        </div>

                                    </>)

                                }
                            </div>

                        )
                    })
                }
            
            
        </>

    );
}


