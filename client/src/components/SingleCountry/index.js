import React from 'react';
import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { capitalizeFirstLetter } from '../../utils/helper'
import Drawer from '../../components/Drawer';
import { useRef, useEffect, useState } from 'react';

const SingleCountry =
  ({
    countryYearIndex,
    chartTypeIndex,
    currentSearchedCountry,
    comparedCountry,
    comparedCountryData,
    comparisonEnabled,
    setComparisonEnabled,
    setComparedCountry,
    setComparedCountryData,
    setCountryYearIndex,
    setCurrentSearchedCountry
  }) => {
    const { searches, updateSearch } = useSearch();
    const { countryname: countryParam } = useParams();
    const navigate = useNavigate();
    // define height of tab to offset top of container
    const tabHeight = '130';
    const cardContainer = useRef();

    // account for transforming manual entries that do not have a capital letter
    const caseTransformedCountryParam = capitalizeFirstLetter(countryParam);

    const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION, {
      variables: { countryname: caseTransformedCountryParam }
    });

    if (data && data?.singleCompileCountry === null) {
      navigate('/', { replace: true });
    }

    const singleCountry = data?.singleCompileCountry?.year_catalog || [];

    //Save more data from country to LocalStorage
    if (data) {
      const countryIndex = searches.findIndex(country => country.name === caseTransformedCountryParam)
      const newData = {
        ...searches[countryIndex],
        score_bhn: data.singleCompileCountry.year_catalog[9].score_bhn,
        score_fow: data.singleCompileCountry.year_catalog[9].score_fow,
        score_opp: data.singleCompileCountry.year_catalog[9].score_opp,
        rank_score_spi: data.singleCompileCountry.year_catalog[9].rank_score_spi,
        score_spi: data.singleCompileCountry.year_catalog[9].score_spi,
      }
      updateSearch(newData);
    }

    const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0 });

    // useEffect(() => {
    //   if (drawerContainer.current && cardContainer.current) {
    //     const drawerRect = drawerContainer.current.getBoundingClientRect();
    //     const cardRect = cardContainer.current.getBoundingClientRect();
  
    //     const top = cardRect.top + window.scrollY + drawerRect.height;
        
  
    //     setTargetPosition({ top});
    //   }
    // }, [drawerContainer.current, cardContainer.current]);

    return (
      <>
        <div className='containerCenter'>
          <Drawer  comparisonEnabled={comparisonEnabled}
            setComparisonEnabled={setComparisonEnabled}
            baseCountry={currentSearchedCountry}
            comparedCountry={comparedCountry}
            setComparedCountry={setComparedCountry}
            comparedCountryData={comparedCountryData}
            setComparedCountryData={setComparedCountryData}
            countryYearIndex={countryYearIndex}
            setCountryYearIndex={setCountryYearIndex}
            currentSearchedCountry={currentSearchedCountry}
            setCurrentSearchedCountry={setCurrentSearchedCountry} />
          <div className='countryCardContainer' ref={cardContainer} style={{  paddingTop: `${tabHeight}px`, position: 'relative'}}>
            {/* accounts for letting asynchronous conditional check of navigate to homepage to assess before possibly passing year_catalog that is undefined */}
            {(loading || data.singleCompileCountry === null) ? (
              <div>Loading...</div>
            ) : (
              <>
                <CountryCards
                  countryProperties={singleCountry}
                  countryYearIndex={countryYearIndex}
                  chartTypeIndex={chartTypeIndex}
                  comparedCountryProperties={comparedCountryData}
                  comparisonEnabled={comparisonEnabled}
                  comparedCountry={comparedCountry}
                  currentSearchedCountry={currentSearchedCountry}
                />
              </>
            )}
          </div>
        </div>
      </>
    )
  }

export default SingleCountry;
