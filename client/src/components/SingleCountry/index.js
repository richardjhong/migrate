import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams } from 'react-router-dom';


import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_SINGLE_COMPILATION } from '../../utils/queries';


export default function SingleCountry() {
    const { countryname: countryParam } = useParams();
    const { loading, data } = useQuery(countryParam ? QUERY_SINGLE_COMPILATION : QUERY_COUNTRIES, {
      variables: {countryname: countryParam}
    });
    const countries = data?.singleCompileCountry || data?.countries || [];

    return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {loading ? (
            <div>Loading...</div>
          ) : (
            <CountryCards
                countryProperties={Array.isArray(countries) ? countries.slice(0, 5) : countries.year_catalog}
            />
          )}
        </div>
    </div>
    )
}
