import React from 'react';
import Header from '../../components/Header';
import CountryCards from '../../components/CountryCards';
import Footer from '../../components/Footer';
import SingleCountryHeader from '../../components/SingleCountryHeader'
import SingleCountry from '../../components/SingleCountry';



function SingleCountryCont() {
    return (
        <>
            <Header />
            <main>
                <SingleCountryHeader />
                <SingleCountry />
            </main>
            <Footer />
        </>

    )
}

export default SingleCountryCont;