import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleCountryHeader from '../../components/SingleCountryHeader'
import SingleCountry from '../../components/SingleCountry';
import './SingleCountryCont.scss'



const SingleCountryCont = () => {
        return (
            <>
                <Header />
                <main>
                    <div className='singleCountHeadCont'>
                        <SingleCountryHeader />
                        {/* <UserComments /> */}
                        
                        {/* <div className='alignSearchElements'>
                            <div className="searchdropdownContainer">
                                <div className="searchContainer">
                                    <SearchCountry
                                        countryYearIndex={countryYearIndex}
                                        setCountryYearIndex={setCountryYearIndex}
                                        currentSearchedCountry={currentSearchedCountry}
                                        setCurrentSearchedCountry={setCurrentSearchedCountry}
                                    />
                                {/* </div>
                                <div className="comparisonContainer"> */}
                                    {/* <CompareCountry
                                        comparisonEnabled={comparisonEnabled}
                                        setComparisonEnabled={setComparisonEnabled}
                                        baseCountry={currentSearchedCountry}
                                        comparedCountry={comparedCountry}
                                        setComparedCountry={setComparedCountry}
                                        comparedCountryData={comparedCountryData}
                                        setComparedCountryData={setComparedCountryData}
                                        countryYearIndex={countryYearIndex}
                                        setCountryYearIndex={setCountryYearIndex}
                                        currentSearchedCountry={currentSearchedCountry}
                                        setCurrentSearchedCountry={setCurrentSearchedCountry}
                                    />
                                </div>
                            </div> */}
                            {/* <div className='mapDataContain'>
                                <div className="dropdownContainer">
                                    <h4>Data Options</h4>
                                    <Dropdown
                                        countryYearIndex={countryYearIndex} setCountryYearIndex={setCountryYearIndex}
                                        options={
                                            [
                                                { value: '', text: 'Select year', disabled: true },
                                                { value: 0, text: '2013' },
                                                { value: 1, text: '2014' },
                                                { value: 2, text: '2015' },
                                                { value: 3, text: '2016' },
                                                { value: 4, text: '2017' },
                                                { value: 5, text: '2018' },
                                                { value: 6, text: '2019' },
                                                { value: 7, text: '2020' },
                                                { value: 8, text: '2021' },
                                                { value: 9, text: '2022' },
                                            ]
                                        }
                                        affectedState={"year"}
                                    />
                                    <Dropdown
                                        chartTypeIndex={chartTypeIndex} setChartTypeIndex={setChartTypeIndex}
                                        options={
                                            [
                                                { value: '', text: 'Select chart type', disabled: true },
                                                { value: 'Line', text: 'Line' },
                                                { value: 'Bar', text: 'Bar', disabled: comparisonEnabled },
                                                { value: 'Area', text: 'Area', disabled: comparisonEnabled },
                                            ]
                                        }
                                        affectedState={"chart"}
                                    />
                                </div>
                            </div>
                        </div> */} 
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