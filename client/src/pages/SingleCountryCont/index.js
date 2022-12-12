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
    const [chartTypeIndex, setChartTypeIndex] = useState('Bar');

    return (
        <>
            <Header />
            <main>
                <div className='singleCountHeadCont'>
                    <SingleCountryHeader />
                    <div className="searchdropdownContainer">
                        <SearchCountry />
                        <div className="dropdownContainer">
                            <Dropdown 
                                countryYearIndex={countryYearIndex} setCountryYearIndex={setCountryYearIndex} 
                                options={
                                    [
                                        {value: '', text: 'Select year', disabled: true},
                                        {value: 0, text: '2018'},
                                        {value: 1, text: '2019'},
                                        {value: 2, text: '2020'},
                                        {value: 3, text: '2021'},
                                        {value: 4, text: '2022'},
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
                                        {value: 'Area', text: 'Area'}
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