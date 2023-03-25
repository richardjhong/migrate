import { useState } from 'react';
import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { capitalizeFirstLetter } from '../../utils/helper'
import CompareCountry from '../Comparison';

export default function SingleCountry({ countryYearIndex, chartTypeIndex }) {

  const [enabled, setEnabled] = useState(false) // used for comparison toggle
  const [comparedCountryData, setComparedCountryData] = useState([]);
  const { searches, updateSearch } = useSearch();
  const { countryname: countryParam } = useParams();
  const [comparedCountry, setComparedCountry] = useState("");
  const navigate = useNavigate();


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

  return (
    <>
      <CompareCountry 
        enabled={enabled} 
        setEnabled={setEnabled} 
        baseCountry={countryParam} 
        comparedCountry={comparedCountry}
        setComparedCountry={setComparedCountry}
        setComparedCountryData={setComparedCountryData}
      />
      <div className='containerCenter'>
        <div className='countryCardContainer'>
          {/* accounts for letting asynchronous conditional check of navigate to homepage to assess before possibly passing year_catalog that is undefined */}
          {(loading || data.singleCompileCountry === null )? (
            <div>Loading...</div>
          ) : (
            <>
              <CountryCards
                countryProperties={singleCountry} countryYearIndex={countryYearIndex} chartTypeIndex={chartTypeIndex} comparedCountryProperties={comparedCountryData} enabled={enabled}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}
