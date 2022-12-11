import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import {capitalizeFirstLetter} from '../../utils/helper'

export default function SingleCountry({ countryYearIndex }) {

  const { searches } = useSearch();
  const { countryname: countryParam } = useParams();
    const navigate = useNavigate();
    console.log(countryYearIndex);

  // account for transforming manual entries that do not have a capital letter
  const caseTransformedCountryParam = capitalizeFirstLetter(countryParam);


  const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION,{
    variables:{countryname : caseTransformedCountryParam}
  });
  
  if (data && data?.singleCompileCountry === null) {
    navigate('/', { replace: true });
  }

  const singleCountry = data?.singleCompileCountry?.year_catalog || [];

  return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {/* accounts for letting asynchronous conditional check of navigate to homepage to assess before possibly passing year_catalog that is undefined */}
        {(loading || data.singleCompileCountry === null )? (
            <div>Loading...</div>
          ) : (
            <>
              <CountryCards
                  countryProperties={singleCountry} countryYearIndex={countryYearIndex}
              /> 
            </>
          )}
        </div>
    </div>
    )
}
