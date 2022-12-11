import React, { useState, useRef } from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
import LineChart from '../CountryChart/LineChart'
import BarChart from '../CountryChart/BarChart'
import {columnData} from "../../utils/countryCardData";
import { valueFromAST } from "graphql";

gsap.registerPlugin(Flip);

const expand = (event) => {
    let box = event.target.closest('.countryCard');
    const flipTargets = document.querySelectorAll(".flex-container, .countryCard");
    console.log(flipTargets)
    const state = Flip.getState(flipTargets);
    console.log()

    console.log(box);
    let boxOrder = box.dataset.column;
    console.log('boxOrder: ', boxOrder);
    // All of the positioning logic to set the end state
    const lastExpanded = document.querySelector(".wide");
    if (lastExpanded) {
        gsap.set(lastExpanded, { clearProps: "order" });
        lastExpanded.classList.remove("wide");
        // change order number of selected box to -1 to move to top of page (probably could be refactored)
        if (!box.isSameNode(lastExpanded)) {
            box.classList.add("wide");
            gsap.set(box, { order: -1 });
        }
    } else {
        box.classList.add("wide");
        gsap.set(box, { order: -1 });
    }
    //move scroll bar with  selected box
    let jumpY = box.getBoundingClientRect();
    console.log(jumpY.y)
    window.scroll({ top: jumpY.y, left: 0, behavior: 'smooth' });


    // Animate from the initial state to the end state!

    Flip.from(state, {
        duration: 1,
        nested: true,
        scale: true,
    });


}


export default function CountryCards({ countryProperties, countryYearIndex, chartTypeIndex }) {
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
    console.log(columnData[1].description);

    return (
        <>
            
                {
                    [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12].map((d, i) => {
                        return (
                            <div
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
                                { d ?.current?.classList?.contains('wide') ?
                               
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
                                                    columnData[i].description.map(val=>{
                                                        return(
                                                            <li>{val}</li>
                                                        )
                                                    })
                                                }
                                               
                                            </ul>

                                            <p className='clickHere'>Click to close...</p>

                                        </section>
                                        <div className='expandedChartArea'>
                                            
                                            {(() => {
                                                const fields = {
                                                    "2018": countryProperties[0][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2019": countryProperties[1][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2020": countryProperties[2][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2021": countryProperties[3][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                    "2022": countryProperties[4][`${columnData[i].src.category}`][`${columnData[i].src.fieldName}`],
                                                }
                                                
                                                switch(chartTypeIndex) {
                                                    case('Bar'):
                                                        return (
                                                            <BarChart fields={fields}/>
                                                        )
                                                    case('Line'):
                                                        return (
                                                            <LineChart fields={fields}/>
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


