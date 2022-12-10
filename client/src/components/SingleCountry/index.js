import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_SINGLE_COMPILATION, QUERY_COUNTRY, QUERY_VALID_COUNTRY } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';

// const { countryname: countryParam } = useParams();
//  const { loading, data } = useQuery(countryParam ? QUERY_SINGLE_COMPILATION : QUERY_COUNTRIES, {
//   variables: {countryname: countryParam}
// });
// const countries = data?.singleCompileCountry || data?.countries || [];

export default function SingleCountry({ countryYearIndex }) {
  // const { searches, countryImgs} = useSearch();
  const { searches } = useSearch();
  const { countryname: countryParam } = useParams();
  const navigate = useNavigate();

  // account for transforming manual entries that do not have a capital letter
  // in each word of searched country
  let caseTransformedCountryParam = countryParam.split(' ')

  for (let i = 0; i < caseTransformedCountryParam.length; i++) {
    caseTransformedCountryParam[i] = caseTransformedCountryParam[i][0].toUpperCase() + caseTransformedCountryParam[i].substring(1)
  }

  caseTransformedCountryParam = caseTransformedCountryParam.join(' ')

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
