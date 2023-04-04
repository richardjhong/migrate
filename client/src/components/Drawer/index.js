import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { useDrawer } from '../../utils/DrawerContext';
import "./Drawer.scss"
import CompareCountry from '../CompareCountry';
import SearchCountry from '../SearchCountry';
import Dropdown from '../Dropdown';
import collapseArrow from '../../images/collapseArrow.svg'
import expandArrow from "../../images/expandArrow.svg"



export default function Drawer() {
    const { 
        countryYearIndex, 
        setCountryYearIndex, 
    } = useSearch();
    const {
        chartTypeIndex,
        setChartTypeIndex,
        comparisonEnabled,
    } = useDrawer();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { loading, data } = useQuery(QUERY_COMPILATIONS);
    const [width, setWidth] = useState(window.innerWidth);
    const drawerContainer = useRef();

    const countries = data?.countryCompilations || [];

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    function handleDrawer () {
        setDrawerOpen(!drawerOpen);
        let drawer = document.getElementById("drawerCont");
        drawerOpen ? drawer.style.transform = "translateX(100%)" : drawer.style.transform = "translateX(0)";
    }


    return (
        <>
            <div id="drawerCont" className='drawer'>
                <div className='optionsToggle' ref={drawerContainer} onClick={() => handleDrawer()}>
                    {!drawerOpen ?
                        <>
                            <h3>Open Options</h3>
                            <img 
                                src={expandArrow}  
                                alt='arrow indicating expanding options menu'
                                className='optionsArrow' 
                            />
                        </>
                        :
                        <>
                            <h3>Close Options</h3>
                            <img src={collapseArrow} 
                                alt='arrow indicating collapsing options menu'
                                className='optionsArrow' 
                            />
                        </>
                    }
                </div>
                <SearchCountry />
                <CompareCountry />
                <hr />
                <div className='mapDataContain'>
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
            </div>
        </>
    )
}