import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleCountryHeader from '../../components/SingleCountryHeader'
import SingleCountry from '../../components/SingleCountry';
import SearchCountry from '../../components/SearchCountry';
import Dropdown from '../../components/Dropdown'
import UserComments from '../../components/UserComments'
import './SingleCountryCont.scss'

function SingleCountryCont() {
    const [countryYearIndex, setCountryYearIndex] = useState(9);
    const [chartTypeIndex, setChartTypeIndex] = useState('Bar');

    useEffect(() => {
        console.log("ajkl;sdfjal;skdfjk##$#$: ", countryYearIndex)        

    }, [countryYearIndex])

    console.log('countryYearIndex at parent level: ', countryYearIndex)
    return (
        <>
            <Header />
            <main>
                <div className='singleCountHeadCont'>
                    <SingleCountryHeader />
                    <UserComments />
                    <div className="searchdropdownContainer">
                        <SearchCountry />
                        <div className="dropdownContainer">
                            <Dropdown 
                                countryYearIndex={countryYearIndex} setCountryYearIndex={setCountryYearIndex} 
                                options={
                                    [
                                        {value: '', text: 'Select year', disabled: true},
                                        {value: 0, text: '2013'},
                                        {value: 1, text: '2014'},
                                        {value: 2, text: '2015'},
                                        {value: 3, text: '2016'},
                                        {value: 4, text: '2017'},
                                        {value: 5, text: '2018'},
                                        {value: 6, text: '2019'},
                                        {value: 7, text: '2020'},
                                        {value: 8, text: '2021'},
                                        {value: 9, text: '2022'},
                                      ]
                                }
                                affectedState={"year"}
                            />
                            <Dropdown 
                                chartTypeIndex={chartTypeIndex} setChartTypeIndex={setChartTypeIndex} 
                                options={
                                    [
                                        {value: '', text: 'Select chart type', disabled: true},
                                        {value: 'Bar', text: 'Bar'},
                                        {value: 'Line', text: 'Line'},
                                        {value: 'Area', text: 'Area'},
                                      ]
                                }
                                affectedState={"chart"}
                            />
                        </div>
                        
                    </div>
                </div>
                <div>
                    <SingleCountry 
                        countryYearIndex={countryYearIndex} 
                        chartTypeIndex={chartTypeIndex}
                    />
                </div>
            </main>
            <Footer />
        </>

    )
}

export default SingleCountryCont;