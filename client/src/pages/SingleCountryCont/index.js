import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleCountryHeader from '../../components/SingleCountryHeader'
import SingleCountry from '../../components/SingleCountry';
import SearchCountry from '../../components/SearchCountry';
import Dropdown from '../../components/Dropdown'
import './SingleCountryCont.scss'

function SingleCountryCont() {
    const [countryYearIndex, setCountryYearIndex] = useState(4);

    return (
        <>
            <Header />
            <main>
                <div className='singleCountHeadCont'>
                    <SingleCountryHeader />
                    <div className="searchdropdownContainer">
                        <SearchCountry />
                        <Dropdown countryYearIndex={countryYearIndex} setCountryYearIndex={setCountryYearIndex} />
                    </div>
                </div>
                <div>
                    <SingleCountry countryYearIndex={countryYearIndex}/>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default SingleCountryCont;