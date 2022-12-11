import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_COMPILATION, QUERY_VALID_COUNTRY } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import {capitalizeFirstLetter} from '../../utils/helper'


export default function SingleCountry({ countryYearIndex }) {

  const { searches } = useSearch();
  const { countryname: countryParam } = useParams();
    const navigate = useNavigate();
    console.log(countryYearIndex);

  // account for transforming manual entries that do not have a capital letter
  const caseTransformedCountryParam = capitalizeFirstLetter(countryParam);

  const { loading: validCountryLoading, data: validCountryData } = useQuery(QUERY_VALID_COUNTRY, {
    variables: {country: caseTransformedCountryParam}
  })

  // tests if the validCountryData is indeed a match to a valid country
  // via a graphql query
  if (validCountryData && validCountryData.validCountryName === null) {
    navigate('/', { replace: true });                 
  }

  const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION,{
    variables:{countryname : caseTransformedCountryParam}
  });

  const singleCountry = data?.singleCompileCountry.year_catalog || [];

  return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {loading ? (
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
