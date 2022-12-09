import React, { useState } from "react";
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

    //move scroll bar to top div with selected box
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

export default function CountryCards({ countryProperties}) {
    const [expanded, setIsExpanded] = useState({
        "col1row1": false,
        "col2row1": false,
        "col3row1": false,
        "col1row2": false,
        "col2row2": false,
        "col3row2": false,
        "col1row3": false,
        "col2row3": false,
        "col3row3": false,
        "col1row4": false,
        "col2row4": false,
        "col3row4": false,
        "previousClicked": ''
    })

    const handleTrackCardExpandedState = e => {
        e.stopPropagation();
        const fieldToUpdate = e.currentTarget.getAttribute("data-name")
        const prevClicked = expanded.previousClicked

        // checks to see if a new card was clicked; if so then the 
        // previousCard should go to non-expanded state content
        if (fieldToUpdate === prevClicked) {
            setIsExpanded((prevState) => ({
                ...prevState,
                [fieldToUpdate]: e.currentTarget.closest('.countryCard').className.includes('wide') ,
                previousClicked: fieldToUpdate 
            }));
        } else {
            setIsExpanded((prevState) => ({
                ...prevState,
                [prevClicked]: false,
                [fieldToUpdate]: e.currentTarget.closest('.countryCard').className.includes('wide') ,
                previousClicked: fieldToUpdate 
            }));
        }
    };

    return (

   <>
            <div className='countryCard' id="col1row1" data-name={'col1row1'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='1'>
                {
                    !expanded.col1row1 ? (
                        
                        <>
                            <div className='cardIcon'>
                                <img src={nutritionIcon} alt='food' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Nutrition and Basic Medical Care</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_nbmc).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={waterIcon} alt='food' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Nutrition and Basic Medical Care</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_nbmc).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].bhn.score_nbmc,
                                    "2019": countryProperties[1].bhn.score_nbmc,
                                    "2020": countryProperties[2].bhn.score_nbmc,
                                    "2021": countryProperties[3].bhn.score_nbmc,
                                    "2022": countryProperties[4].bhn.score_nbmc,}
                                }
                            />
                        </>
                    )
                }

            </div>

            <div className='countryCard' id="col2row1" data-name={'col2row1'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='2'>
                {
                    !expanded.col2row1 ? (
                        <>
                            <div className='cardIcon'>
                                <img src={waterIcon} alt='water' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Water and Sanitation</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_ws).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                           <div className='cardIcon'>
                                <img src={waterIcon} alt='water' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Water and Sanitation</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_ws).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].bhn.score_ws,
                                    "2019": countryProperties[1].bhn.score_ws,
                                    "2020": countryProperties[2].bhn.score_ws,
                                    "2021": countryProperties[3].bhn.score_ws,
                                    "2022": countryProperties[4].bhn.score_ws,}
                                }
                            />
                        </>
                    )
                }
                

            </div>
            <div className='countryCard' id="col3row1" data-name={'col3row1'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='3'>
                {
                    !expanded.col3row1 ? (
                        <>
                            <div className='cardIcon'>
                                <img src={shelterIcon} alt='shelter' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Shelter</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_sh).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={shelterIcon} alt='shelter' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Shelter</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_sh).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        <Chart 
                            fields={
                                {"2018": countryProperties[0].bhn.score_sh,
                                "2019": countryProperties[1].bhn.score_sh,
                                "2020": countryProperties[2].bhn.score_sh,
                                "2021": countryProperties[3].bhn.score_sh,
                                "2022": countryProperties[4].bhn.score_sh,}
                            }
                        />
                        </> 
                    )
                }
            </div>

            <div className='countryCard' id="col1row2" data-name={'col1row2'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='4'>
                {
                    !expanded.col1row2 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={safetyIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Safety</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_ps).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                             <div className='cardIcon'>
                                <img src={safetyIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Safety</h3>
                                <p className='cardValue'>{(countryProperties[4].bhn.score_ps).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        <Chart 
                            fields={
                                {"2018": countryProperties[0].bhn.score_ps,
                                "2019": countryProperties[1].bhn.score_ps,
                                "2020": countryProperties[2].bhn.score_ps,
                                "2021": countryProperties[3].bhn.score_ps,
                                "2022": countryProperties[4].bhn.score_ps,}
                            }
                        />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row2" data-name={'col2row2'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='5'>
                {
                    !expanded.col2row2 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Basic Knowledge</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_abk).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                             <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Basic Knowledge</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_abk).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        <Chart 
                            fields={
                                {"2018": countryProperties[0].fow.score_abk,
                                "2019": countryProperties[1].fow.score_abk,
                                "2020": countryProperties[2].fow.score_abk,
                                "2021": countryProperties[3].fow.score_abk,
                                "2022": countryProperties[4].fow.score_abk,}
                            }
                        />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row2" data-name={'col3row2'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='6'>
                {
                    !expanded.col3row2 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal safety' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Information and Communication</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_aic).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to information and communications' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Information and Communication</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_aic).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].fow.score_aic,
                                    "2019": countryProperties[1].fow.score_aic,
                                    "2020": countryProperties[2].fow.score_aic,
                                    "2021": countryProperties[3].fow.score_aic,
                                    "2022": countryProperties[4].fow.score_aic,}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col1row3" data-name={'col1row3'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='7'>
                {
                    !expanded.col1row3 ? (
                        <>
                            <div className='cardIcon'>
                                <img src={healthWellIcon} alt='health and wellness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Health and Wellness</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_hw).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                              <div className='cardIcon'>
                                <img src={healthWellIcon} alt='health and wellness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Health and Wellness</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_hw).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].fow.score_hw,
                                    "2019": countryProperties[1].fow.score_hw,
                                    "2020": countryProperties[2].fow.score_hw,
                                    "2021": countryProperties[3].fow.score_hw,
                                    "2022": countryProperties[4].fow.score_hw}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row3" data-name={'col2row3'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='8'>
                {
                    !expanded.col2row3 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='environmental quality' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Environmental Quality</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_eq).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                        </>
                    ) : (
                        <>
                           <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='environmental quality' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Environmental Quality</h3>
                                <p className='cardValue'>{(countryProperties[4].fow.score_eq).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].fow.score_eq,
                                    "2019": countryProperties[1].fow.score_eq,
                                    "2020": countryProperties[2].fow.score_eq,
                                    "2021": countryProperties[3].fow.score_eq,
                                    "2022": countryProperties[4].fow.score_eq,}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row3" data-name={'col3row3'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='9'>
                {
                    !expanded.col3row3 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='personal rights' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Rights</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_pr).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                             <div className='cardIcon'>
                                <img src={enivronQualityIcon} alt='personal rights' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Rights</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_pr).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].opp.score_pr,
                                    "2019": countryProperties[1].opp.score_pr,
                                    "2020": countryProperties[2].opp.score_pr,
                                    "2021": countryProperties[3].opp.score_pr,
                                    "2022": countryProperties[4].opp.score_pr,}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col1row4" data-name={'col1row4'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='10'>
                {
                    !expanded.col1row4 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal freedom and choice' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Freedom and Choice</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_pfc).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='personal freedom and choice' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Personal Freedom and Choice</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_pfc).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].opp.score_pfc,
                                    "2019": countryProperties[1].opp.score_pfc,
                                    "2020": countryProperties[2].opp.score_pfc,
                                    "2021": countryProperties[3].opp.score_pfc,
                                    "2022": countryProperties[4].opp.score_pfc,}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row4" data-name={'col2row4'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='11'>
                {
                    !expanded.col2row4 ? (
                        <>
                             <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='inclusiveness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Inclusiveness</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_incl).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='inclusiveness' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Inclusiveness</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_incl).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].opp.score_incl,
                                    "2019": countryProperties[1].opp.score_incl,
                                    "2020": countryProperties[2].opp.score_incl,
                                    "2021": countryProperties[3].opp.score_incl,
                                    "2022": countryProperties[4].opp.score_incl,}
                                }
                            />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row4" data-name={'col3row4'} onClick={(event) => { 
                expand(event) 
                handleTrackCardExpandedState(event)        
            }} data-column='12'>
                {
                    !expanded.col3row4 ? (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to advanced education' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Advanced Education</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_aae).toString()}</p>
                                <p className='clickHere'>Click to see more...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='cardIcon'>
                                <img src={basicKnowIcon} alt='access to advanced education' />
                            </div>
                            <div className='cardTitle'>
                                <h3>Access to Advanced Education</h3>
                                <p className='cardValue'>{(countryProperties[4].opp.score_aae).toString()}</p>
                                <p className='clickHere'>Click to close...</p>
                            </div>
                            <Chart 
                                fields={
                                    {"2018": countryProperties[0].opp.score_aae,
                                    "2019": countryProperties[1].opp.score_aae,
                                    "2020": countryProperties[2].opp.score_aae,
                                    "2021": countryProperties[3].opp.score_aae,
                                    "2022": countryProperties[4].opp.score_aae,}
                                }
                            />
                        </>
                    )
                }
            </div>
        </>

    );
}


