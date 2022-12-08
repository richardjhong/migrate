import React from 'react';
import "./Splash.scss";
import Header from '../../components/Header';

function Splash() {
    return (

            <main className="splash">
                <p className='tag'>Looking to relocate? Start your search here.</p>
                <h1 className='migrate'>MIGRATE</h1>
                <button class="button">Where are you going?...</button>
                <p className="overview"> Get the hard data about your dream country.
                    Migrate compiles years of information to present a general overview of any country. There are so many factors that
                    play into choosing a new home. Get information about education levels, sanitation, resource access, quality of life,
                    and safety.
                </p> 
            </main>
        )
}

export default Splash;