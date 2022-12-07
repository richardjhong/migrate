import React from 'react';
import "../components/SingleCountry/SingleCountry.scss";
import SingleCountryHeader from '../components/SingleCountryHeader';
import Header from '../components/Header';
import CountryCards from '../components/CountryCards';
import Footer from '../components/Footer';


function SingleCountry() {
    return (
        <>
            <Header />
            <main>
                <SingleCountryHeader />
                <CountryCards />
            </main>
            <Footer />
        </>

    )
}

export default SingleCountry;