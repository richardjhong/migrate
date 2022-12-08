import React, { useState, useEffect } from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
import Chart from '../CountryChart/'
gsap.registerPlugin(Flip);



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
    })

    const expand = (event) => {
        let box = event.target;
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

    const handleGetClassName = e => {
        e.stopPropagation();
        e.preventDefault();
        const fieldToUpdate = e.target.getAttribute("data-name")
        setIsExpanded((prevState) => ({
            ...prevState,
            [fieldToUpdate]: e.target.closest('.countryCard').className.includes('wide') 
        }));
    };

    return (

   <>
            <div className='countryCard' id="col1row1" data-name={'col1row1'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='1'>
                {
                    !expanded.col1row1 ? (
                        <>
                            <p>This is non-expanded col1row1</p>
                        </>
                    ) : (
                        <>
                            <p>
                                Nutrition & Basic Medical Care: {(countryProperties.bhn.score_nbmc).toString()}
                            </p>
                        <Chart />
                        </>
                    )
                }

            </div>

            <div className='countryCard' id="col2row1" data-name={'col2row1'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='2'>
                {
                    !expanded.col2row1 ? (
                        <>
                            <p>This is non-expanded col2row1</p>
                        </>
                    ) : (
                        <p>
                            This is expanded col2row1
                        </p>
                    )
                }
                

            </div>
            <div className='countryCard' id="col3row1" data-name={'col3row1'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='3'>
                {
                    !expanded.col3row1 ? (
                        <>
                            <p>This is non-expanded col3row1</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col3row1
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col1row2" data-name={'col1row2'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='4'>
                {
                    !expanded.col1row2 ? (
                        <>
                            <p>This is non-expanded col1row2</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col1row2
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row2" data-name={'col2row2'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='5'>
                {
                    !expanded.col2row2 ? (
                        <>
                            <p>This is non-expanded col2row2</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col2row2
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row2" data-name={'col3row2'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='6'>
                {
                    !expanded.col3row2 ? (
                        <>
                            <p>This is non-expanded col3row2</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col3row2
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col1row3" data-name={'col1row3'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='7'>
                {
                    !expanded.col1row3 ? (
                        <>
                            <p>This is non-expanded col1row3</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col1row3
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row3" data-name={'col2row3'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='8'>
                {
                    !expanded.col2row3 ? (
                        <>
                            <p>This is non-expanded col2row3</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col2row3
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row3" data-name={'col3row3'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='9'>
                {
                    !expanded.col3row3 ? (
                        <>
                            <p>This is non-expanded col3row3</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col3row3
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col1row4" data-name={'col1row4'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='10'>
                {
                    !expanded.col1row4 ? (
                        <>
                            <p>This is non-expanded col1row4</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col1row4
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col2row4" data-name={'col2row4'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='11'>
                {
                    !expanded.col2row4 ? (
                        <>
                            <p>This is non-expanded col2row4</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col2row4
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
            <div className='countryCard' id="col3row4" data-name={'col3row4'} onClick={(event) => { 
                expand(event) 
                handleGetClassName(event)        
            }} data-column='12'>
                {
                    !expanded.col3row4 ? (
                        <>
                            <p>This is non-expanded col3row4</p>
                        </>
                    ) : (
                        <>
                            <p>
                                This is expanded col3row4
                            </p>
                        <Chart />
                        </>
                    )
                }
            </div>
        </>

    );
}


