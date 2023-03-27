import React from 'react';
import "./Splash.scss";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchCountry from '../../components/SearchCountry';

const Splash = ({ countryYearIndex, setCountryYearIndex, currentSearchedCountry, setCurrentSearchedCountry }) => {
    return (
        <>
            <Header />
            <main className="darkBg">
                <p className='tag'>Looking to relocate? Start your search here.</p>
                <div className='splash'>
                    <div className="searchRespCenter">
                        <SearchCountry 
                            countryYearIndex={countryYearIndex} 
                            setCountryYearIndex={setCountryYearIndex}
                            currentSearchedCountry={currentSearchedCountry}
                            setCurrentSearchedCountry={setCurrentSearchedCountry}
                        />
                    </div>
                </div>
                <p className="overview"> 
                    Migrate compiles years of information to present a general overview of any country. There are so many factors that play into choosing a new home. Get information about education levels, sanitation, resource access, quality of life,
                    and safety.
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Splash;