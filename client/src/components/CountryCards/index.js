import React, { useState, useRef } from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
import LineChart from '../CountryChart/LineChart'
import BarChart from '../CountryChart/BarChart'
import nutritionIcon from '../../images/Nutrition-Basic-Needs.png';
import waterIcon from '../../images/Water-Sanitation.png';
import shelterIcon from '../../images/Shelter.png';
import safetyIcon from '../../images/Safety.png';
import basicKnowIcon from '../../images/Access-Knowledge.png';
import healthWellIcon from '../../images/Health-Wellness.png';
import enivronQualityIcon from '../../images/Environmental-Quality.png'

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

    console.log("countryProperties: ", countryProperties)

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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={nutritionIcon} alt='food' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Nutrition and Basic Medical Care</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_nbmc).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Infectious Diseases - Age-standardized Disability Adjusted Life Years per 100,000 people</li>
                                <li>Child Mortality Rate - Chance of dying before age 5 per 1000 live births</li>
                                <li>Child Stunting - prevalence of stunting (shorter than expected for age)</li>
                                <li>Maternal Mortality Rate - Maternal deaths per 100,000 livebirths in women 10-54 years</li>
                                <li>Undernourishment - Percentage of population consuming less than threshold energy needs.</li>
                                <li>Diet Low in Fruits and Vegetables - risk-weighted and age-standardized</li>
                            </ul>


                            <p className='clickHere'>Click to close...</p>

                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].bhn.score_nbmc,
                                            "2019": countryProperties[1].bhn.score_nbmc,
                                            "2020": countryProperties[2].bhn.score_nbmc,
                                            "2021": countryProperties[3].bhn.score_nbmc,
                                            "2022": countryProperties[4].bhn.score_nbmc,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].bhn.score_nbmc,
                                        "2019": countryProperties[1].bhn.score_nbmc,
                                        "2020": countryProperties[2].bhn.score_nbmc,
                                        "2021": countryProperties[3].bhn.score_nbmc,
                                        "2022": countryProperties[4].bhn.score_nbmc,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>)
                    :
                    (<>

                        <div className='cardIcon'>
                            <img src={nutritionIcon} alt='food' />
                        </div>
                        <div className='cardTitle'>
                            <h3>Nutrition and Basic Medical Care</h3>
                            <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_nbmc).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={waterIcon} alt='water' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Water and Sanitation</h3>

                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_ws).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Access to Improved Sanitation - Proportion of population with access to improved toilets</li>
                                <li>Access to Improved Water Sources - Proportion of population with access to improved water systems</li>
                                <li>Unsafe Water, Sanitation and Hygiene - Disability-adjusted life years per 100,000 people based on unsafe water, sanitation, and hygiene</li>
                                <li>Satisfaction with Water Quality - proportion of population</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].bhn.score_ws,
                                            "2019": countryProperties[1].bhn.score_ws,
                                            "2020": countryProperties[2].bhn.score_ws,
                                            "2021": countryProperties[3].bhn.score_ws,
                                            "2022": countryProperties[4].bhn.score_ws,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].bhn.score_ws,
                                        "2019": countryProperties[1].bhn.score_ws,
                                        "2020": countryProperties[2].bhn.score_ws,
                                        "2021": countryProperties[3].bhn.score_ws,
                                        "2022": countryProperties[4].bhn.score_ws,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={waterIcon} alt='water' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Water and Sanitation</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_ws).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={shelterIcon} alt='shelter' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Shelter</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_sh).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Household Air Pollution - Disability-adjusted Life Years caused by household solid fuels</li>
                                <li>Disatisfaction with Housing Affordabiility - Proportion of population answering "dissatisfied"</li>
                                <li>Access to Electricity - Percentage of population with access to electricity</li>
                                <li>Use of Clean Fuels and Tech for cooking - Percentage of population primarily using clean fuels and tech for cooking</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].bhn.score_sh,
                                            "2019": countryProperties[1].bhn.score_sh,
                                            "2020": countryProperties[2].bhn.score_sh,
                                            "2021": countryProperties[3].bhn.score_sh,
                                            "2022": countryProperties[4].bhn.score_sh,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].bhn.score_sh,
                                        "2019": countryProperties[1].bhn.score_sh,
                                        "2020": countryProperties[2].bhn.score_sh,
                                        "2021": countryProperties[3].bhn.score_sh,
                                        "2022": countryProperties[4].bhn.score_sh,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={shelterIcon} alt='shelter' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Shelter</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_sh).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='countryCard' ref={ref4} id="col1row2" data-name={'col1row2'} onClick={(event) => {
                expand(event)
                setToggle(!toggle);
            }} data-column='4'>
                {(ref4?.current?.classList?.contains('wide')) ?
                    (<>
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={safetyIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Safety</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_ps).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Interpersonal Violence</li>
                                <li>Transportation Related Injuries</li>
                                <li>Political Killings and Torture</li>
                                <li>Intimate Partner Violence</li>
                                <li>Money Stolen</li>
                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].bhn.score_ps,
                                            "2019": countryProperties[1].bhn.score_ps,
                                            "2020": countryProperties[2].bhn.score_ps,
                                            "2021": countryProperties[3].bhn.score_ps,
                                            "2022": countryProperties[4].bhn.score_ps,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].bhn.score_ps,
                                        "2019": countryProperties[1].bhn.score_ps,
                                        "2020": countryProperties[2].bhn.score_ps,
                                        "2021": countryProperties[3].bhn.score_ps,
                                        "2022": countryProperties[4].bhn.score_ps,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={safetyIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Safety</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].bhn.score_ps).toString()}</p>
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
                            <section className='expandedCardInfo'>
                                <div className='cardIcon'>
                                    <img src={basicKnowIcon} alt='personal safety' />
                                </div>
                                <div className='cardTitle'>
                                    <h3>Access to Basic Knowledge</h3>
                                    <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_abk).toString()}</p>
                                </div>
                                <h4 className="expandedDivider">Scores based on...</h4>
                                <ul>
                                    <li>Population with No Schooling</li>
                                    <li>Equal Access to Quality Education</li>
                                    <li>Primary School Enrollment</li>
                                    <li>Gender Parity in Secondary Attainment</li>

                                </ul>
                                <p className='clickHere'>Click to close...</p>
                            </section>
                            <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].fow.score_abk,
                                            "2019": countryProperties[1].fow.score_abk,
                                            "2020": countryProperties[2].fow.score_abk,
                                            "2021": countryProperties[3].fow.score_abk,
                                            "2022": countryProperties[4].fow.score_abk,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].fow.score_abk,
                                        "2019": countryProperties[1].fow.score_abk,
                                        "2020": countryProperties[2].fow.score_abk,
                                        "2021": countryProperties[3].fow.score_abk,
                                        "2022": countryProperties[4].fow.score_abk,
                                    }
                                }
                            />) 
                            }
                        </div>
                        </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Basic Knowledge</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_abk).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to information and communications' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Information and Communications</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_aic).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Access to Online Governance</li>
                                <li>Internet Users</li>
                                <li>Mobile telephone subscriptions</li>
                                <li>Alternative sources of information index</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].fow.score_aic,
                                            "2019": countryProperties[1].fow.score_aic,
                                            "2020": countryProperties[2].fow.score_aic,
                                            "2021": countryProperties[3].fow.score_aic,
                                            "2022": countryProperties[4].fow.score_aic,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].fow.score_aic,
                                        "2019": countryProperties[1].fow.score_aic,
                                        "2020": countryProperties[2].fow.score_aic,
                                        "2021": countryProperties[3].fow.score_aic,
                                        "2022": countryProperties[4].fow.score_aic,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Information and Communications</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_aic).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={healthWellIcon} alt='health and wellness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Health and Wellness</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_hw).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Life expectancy at 60 </li>
                                <li>Premature deaths from non-communicable diseases </li>
                                <li>Equal access to quality healthcare </li>
                                <li>Access to essential health services </li>
                                <li>Satisfaction with availability of quality healthcare</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].fow.score_hw,
                                            "2019": countryProperties[1].fow.score_hw,
                                            "2020": countryProperties[2].fow.score_hw,
                                            "2021": countryProperties[3].fow.score_hw,
                                            "2022": countryProperties[4].fow.score_hw,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].fow.score_hw,
                                        "2019": countryProperties[1].fow.score_hw,
                                        "2020": countryProperties[2].fow.score_hw,
                                        "2021": countryProperties[3].fow.score_hw,
                                        "2022": countryProperties[4].fow.score_hw,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={healthWellIcon} alt='health and wellness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Health and Wellness</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_hw).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='environmental quality' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Environmental Quality</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_eq).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Outdoor air pollution</li>
                                <li>Lead exposure </li>
                                <li>Particulate matter pollution </li>
                                <li>Species protection  </li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].fow.score_eq,
                                            "2019": countryProperties[1].fow.score_eq,
                                            "2020": countryProperties[2].fow.score_eq,
                                            "2021": countryProperties[3].fow.score_eq,
                                            "2022": countryProperties[4].fow.score_eq,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].fow.score_eq,
                                        "2019": countryProperties[1].fow.score_eq,
                                        "2020": countryProperties[2].fow.score_eq,
                                        "2021": countryProperties[3].fow.score_eq,
                                        "2022": countryProperties[4].fow.score_eq,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='environmental quality' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Environmental Quality</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].fow.score_eq).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='personal rights' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Rights</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_pr).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Access to justice </li>
                                <li>Freedom of religion </li>
                                <li>Political rights </li>
                                <li>Property rights for women </li>
                                <li>Freedom of peaceful assembly </li>
                                <li>Freedom of discussion</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].opp.score_pr,
                                            "2019": countryProperties[1].opp.score_pr,
                                            "2020": countryProperties[2].opp.score_pr,
                                            "2021": countryProperties[3].opp.score_pr,
                                            "2022": countryProperties[4].opp.score_pr,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].opp.score_pr,
                                        "2019": countryProperties[1].opp.score_pr,
                                        "2020": countryProperties[2].opp.score_pr,
                                        "2021": countryProperties[3].opp.score_pr,
                                        "2022": countryProperties[4].opp.score_pr,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>

                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='personal rights' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Rights</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_pr).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal freedom and choice' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Freedom and Choice</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_pfc).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Satisfied demand for contraception </li>
                                <li>Perception of corruption </li>
                                <li>Early marriage </li>
                                <li>Young people not in education, employment or training </li>
                                <li>Vulnerable employment </li>
                                <li>Freedom of domestic movement</li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].opp.score_pfc,
                                            "2019": countryProperties[1].opp.score_pfc,
                                            "2020": countryProperties[2].opp.score_pfc,
                                            "2021": countryProperties[3].opp.score_pfc,
                                            "2022": countryProperties[4].opp.score_pfc,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].opp.score_pfc,
                                        "2019": countryProperties[1].opp.score_pfc,
                                        "2020": countryProperties[2].opp.score_pfc,
                                        "2021": countryProperties[3].opp.score_pfc,
                                        "2022": countryProperties[4].opp.score_pfc,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal freedom and choice' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Freedom and Choice</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_pfc).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='inclusiveness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Inclusiveness</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_incl).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Equal protection index</li>
                                <li>Equal access index</li>
                                <li>Power distributed by sexual orientation</li>
                                <li>Access to public services distributed by social group </li>
                                <li>Discrimination and violence against minorities </li>
                                <li>Acceptance of gays and lesbians </li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].opp.score_incl,
                                            "2019": countryProperties[1].opp.score_incl,
                                            "2020": countryProperties[2].opp.score_incl,
                                            "2021": countryProperties[3].opp.score_incl,
                                            "2022": countryProperties[4].opp.score_incl,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].opp.score_incl,
                                        "2019": countryProperties[1].opp.score_incl,
                                        "2020": countryProperties[2].opp.score_incl,
                                        "2021": countryProperties[3].opp.score_incl,
                                        "2022": countryProperties[4].opp.score_incl,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='inclusiveness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Inclusiveness</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_incl).toString()}</p>
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
                        <section className='expandedCardInfo'>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to advanced education' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Advanced Education</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_aae).toString()}</p>
                            </div>
                            <h4 className="expandedDivider">Scores based on...</h4>
                            <ul>
                                <li>Citable documents </li>
                                <li>Academic freedom </li>
                                <li>Women with advanced education </li>
                                <li>Expected years of tertiary schooling </li>
                                <li>Quality weighted universities  </li>

                            </ul>
                            <p className='clickHere'>Click to close...</p>
                        </section>
                        <div className='expandedChartArea'>
                            {chartTypeIndex === 0 ? 
                                (<LineChart
                                    fields={
                                        {
                                            "2018": countryProperties[0].opp.score_aae,
                                            "2019": countryProperties[1].opp.score_aae,
                                            "2020": countryProperties[2].opp.score_aae,
                                            "2021": countryProperties[3].opp.score_aae,
                                            "2022": countryProperties[4].opp.score_aae,
                                        }
                                    }
                                />) 
                            : (<BarChart
                                fields={
                                    {
                                        "2018": countryProperties[0].opp.score_aae,
                                        "2019": countryProperties[1].opp.score_aae,
                                        "2020": countryProperties[2].opp.score_aae,
                                        "2021": countryProperties[3].opp.score_aae,
                                        "2022": countryProperties[4].opp.score_aae,
                                    }
                                }
                            />) 
                            }
                        </div>
                    </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to advanced education' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Advanced Education</h3>
                                <p className='cardValue'>{(countryProperties[countryYearIndex].opp.score_aae).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    )
                }
            </div>
        </>

    );
}


