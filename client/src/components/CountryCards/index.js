import React, { useState, useRef } from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
import Chart from '../CountryChart/'
import nutritionIcon from '../../images/Nutrition-Basic-Needs.png';
import waterIcon from '../../images/Water-Sanitation.png';
import shelterIcon from '../../images/Shelter.png';
import safetyIcon from '../../images/Safety.png';
import basicKnowIcon from '../../images/Access-Knowledge.png';
import healthWellIcon from '../../images/Health-Wellness.png';
import enivronQualityIcon from '../../images/Environmental-Quality.png'
import { isCompositeType } from "graphql";


gsap.registerPlugin(Flip);

const expand = (event) => {
    let box = event.target.closest('.countryCard');
    const flipTargets = document.querySelectorAll(".flex-container, .countryCard");
    console.log(flipTargets)
    const state = Flip.getState(flipTargets);

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


export default function CountryCards({ countryProperties }) {
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
            <div className='countryCard' ref={ref1} id="col1row1" data-name={'col1row1'} onClick={(event) => {
                expand(event)
                setToggle(!toggle)
            }} data-column='1' >
                {/* { (ref1 && ref1.current && ref1.current.classList) ? console.log(ref1.current.classList) : console.log('no wide')} */}
                {/* { (ref1 && ref1.current && ref1.current.classList && ref1.current.classList.contains('wide')) ?  */}
                {(ref1?.current?.classList?.contains('wide')) ?

                    (<>
                        <div className='cardIcon'>
                            <img src={nutritionIcon} alt='food' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Nutrition and Basic Medical Care -wide</h3>
                            <p className='cardValue'>{(countryProperties.bhn.score_nbmc).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>)
                    :
                    (<>
                        <div className='cardIcon'>
                            <img src={nutritionIcon} alt='food' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Nutrition and Basic Medical Care</h3>
                            <p className='cardValue'>{(countryProperties.bhn.score_nbmc).toString()}</p>
                            <p className='clickHere'>Click to see more...</p>
                        </div>

                    </>)

                }


            </div>

            <div className='countryCard' ref={ref2} id="col2row1" data-name={'col2row1'} onClick={(event) => {
                expand(event)
                setToggle(!toggle)

            }} data-column='2'>
                {(ref2?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={waterIcon} alt='water' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Water and Sanitation</h3>
                            <p className='cardValue'>{(countryProperties.bhn.score_ws).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={waterIcon} alt='water' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Water and Sanitation</h3>
                                <p className='cardValue'>{(countryProperties.bhn.score_ws).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }



            </div>
            <div className='countryCard' ref={ref3} id="col3row1" data-name={'col3row1'} onClick={(event) => {
                expand(event);
                setToggle(!toggle);
            }} data-column='3'>
                {(ref3?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={shelterIcon} alt='shelter' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Shelter</h3>
                            <p className='cardValue'>{(countryProperties.bhn.score_sh).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={shelterIcon} alt='shelter' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Shelter</h3>
                                <p className='cardValue'>{(countryProperties.bhn.score_sh).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref4} id="col1row2" data-name={'col1row2'} onClick={(event) => {
                expand(event)

            }} data-column='4'>
                {(ref4?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={safetyIcon} alt='personal safety' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Personal Safety</h3>
                            <p className='cardValue'>{(countryProperties.bhn.score_ps).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={safetyIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Safety</h3>
                                <p className='cardValue'>{(countryProperties.bhn.score_ps).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref5} id="col2row2" data-name={'col2row2'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='5'>
                {(ref5?.current?.classList?.contains('wide')) ?
                    (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Basic Knowledge</h3>
                                <p className='cardValue'>{(countryProperties.fow.score_abk).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart />
                        </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Basic Knowledge</h3>
                                <p className='cardValue'>{(countryProperties.fow.score_abk).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref6} id="col3row2" data-name={'col3row2'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='6'>
                {(ref6?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={basicKnowIcon} alt='access to information and communications' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Access to Information and Communicationaic</h3>
                            <p className='cardValue'>{(countryProperties.fow.score_aic).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Information and Communicationaic</h3>
                                <p className='cardValue'>{(countryProperties.fow.score_aic).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref7} id="col1row3" data-name={'col1row3'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='7'>
                {(ref7?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={healthWellIcon} alt='health and wellness' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Health and Wellness</h3>
                            <p className='cardValue'>{(countryProperties.fow.score_hw).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={healthWellIcon} alt='health and wellness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Health and Wellness</h3>
                                <p className='cardValue'>{(countryProperties.fow.score_hw).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref8} id="col2row3" data-name={'col2row3'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='8'>
                {(ref8?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={enivronQualityIcon} alt='environmental quality' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Environmental Quality</h3>
                            <p className='cardValue'>{(countryProperties.fow.score_eq).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='environmental quality' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Environmental Quality</h3>
                                <p className='cardValue'>{(countryProperties.fow.score_eq).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref9} id="col3row3" data-name={'col3row3'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='9'>
                {(ref9?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={enivronQualityIcon} alt='personal rights' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Personal Rights</h3>
                            <p className='cardValue'>{(countryProperties.opp.score_pr).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='personal rights' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Rights</h3>
                                <p className='cardValue'>{(countryProperties.opp.score_pr).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref10} id="col1row4" data-name={'col1row4'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='10'>
                {(ref10?.current?.classList?.contains('wide')) ?
                    (<>
                        <div className='cardIcon'>
                            <img src={basicKnowIcon} alt='personal freedom and choice' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Personal Freedom and Choice</h3>
                            <p className='cardValue'>{(countryProperties.opp.score_pfc).toString()}</p>
                            <p className='clickHere'>Click to close...</p>
                        </div>
                        <Chart />
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal freedom and choice' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Freedom and Choice</h3>
                                <p className='cardValue'>{(countryProperties.opp.score_pfc).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref11} id="col2row4" data-name={'col2row4'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);   
            }} data-column='11'>
                 {(ref11?.current?.classList?.contains('wide')) ?
                    (<>
                    <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='inclusiveness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Inclusiveness</h3>
                                <p className='cardValue'>{(countryProperties.opp.score_incl).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        <Chart />
                </>
                 ) : (
                        <>
                            <div className='cardIcon'>
                        <img src={basicKnowIcon} alt='inclusiveness' />
                    </div>
                    <div className='cardTitle'>
                        <h3>Inclusiveness</h3>
                        <p className='cardValue'>{(countryProperties.opp.score_incl).toString()}</p>
                        <p className='clickHere'>Click to see more...</p>
                    </div>
                        </>
                    )
                } 
            </div>
            <div className='countryCard' ref={ref12} id="col3row4" data-name={'col3row4'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);       
            }} data-column='12'>
               {(ref12?.current?.classList?.contains('wide')) ?
                    (<>
                       <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to advanced education' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Advanced Education</h3>
                                <p className='cardValue'>{(countryProperties.opp.score_aae).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        <Chart />
                </>
              ) : (
                        <>
                         <div className='cardIcon'>
                        <img src={basicKnowIcon} alt='access to advanced education' />
                    </div>
                    <div className='cardTitle'>
                        <h3>Access to Advanced Education</h3>
                        <p className='cardValue'>{(countryProperties.opp.score_aae).toString()}</p>
                        <p className='clickHere'>Click to see more...</p>
                    </div>
                        </>
                    )
                } 
            </div>
        </>

    );
}


