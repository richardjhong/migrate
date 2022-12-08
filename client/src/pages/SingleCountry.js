import React from 'react';
// import "./SingleCountry.scss";
import Header from '../components/Header';
import CountryCards from '../components/CountryCards';
import Footer from '../components/Footer';
import SingleCountryHeader from '../components/SingleCountryHeader'


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