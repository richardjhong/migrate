import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleCountryHeader from '../../components/SingleCountryHeader'
import SingleCountry from '../../components/SingleCountry';
import SearchCountry from '../../components/SearchCountry';



function SingleCountryCont() {
    return (
        <>
            <Header />
            <main>
                <div className='singleCountHeadCont'>
                    <SingleCountryHeader />
                    <SearchCountry />
                </div>
                <div>
                    <SingleCountry />
                </div>
            </main>
            <Footer />
        </>

    )
}

export default SingleCountryCont;