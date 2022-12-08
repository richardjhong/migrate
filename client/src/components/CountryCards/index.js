import React from "react";
import './CountryCards.scss';
import { gsap } from 'gsap'
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const expand = (event) => {
    let box = event.target;
    const flipTargets = document.querySelectorAll(".flex-container, .countryCard");
    console.log(flipTargets)
    const state = Flip.getState(flipTargets);

    console.log(box);
    let boxOrder = box.dataset.column;
    console.log(boxOrder);
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

    return (

   <>
            <div className='countryCard' onClick={(event) => { expand(event) }} data-column='1'>
                Nutrition & Basic Medical Care: {(countryProperties.bhn.score_nbmc).toString()}
            </div>

            <div className='countryCard' onClick={(event) => { expand(event) }} data-column='2'>
                CAT1
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>
            <div className='countryCard' id='1' onClick={(event) => { expand(event) }} data-column='3'>
               
                This is a test element. CAT1

            </div>
            <div className='countryCard' id='2' onClick={(event) => { expand(event) }} data-column='4'>
                This is a test element. CAT1

            </div>
            <div className='countryCard' id='3' onClick={(event) => { expand(event) }} data-column='5'>
                This is a test element. CAT2<div className='embedTest'>This is a test embed</div>

            </div>
            <div className='countryCard' id='4' onClick={(event) => { expand(event) }} data-column='6'>
                This is a test element.CAT2

            </div>
            <div className='countryCard' id='5' onClick={(event) => { expand(event) }} data-column='7'>
                <p>CAT 2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className='countryCard' id='6' onClick={(event) => { expand(event) }} data-column='18'>
                This is a test element. CAT2

            </div>
            <div className='countryCard' id='7' onClick={(event) => { expand(event) }} data-column='9'>
                This is a test element.CAT3

            </div>
            <div className='countryCard' onClick={(event) => { expand(event) }} data-column='10'>
                This is a test element.CAT3
            </div>
            <div className='countryCard' onClick={(event) => { expand(event) }} data-column='11'>
                This is a test element.CAT3

            </div>
            <div className='countryCard' onClick={(event) => { expand(event) }} data-column='12'>
                This is a test element.CAT3

            </div>
</>

    );
}


