import React from 'react';
import "./Splash.scss";
import Header from '../../components/Header';

function Splash() {
    return (
        <>
        <Header />
        <main className="splash">
            <div className="splashContain">
                <button className="button">Where are you going?...</button>
            </div>
        </main>
        </>
    )
}

export default Splash;