import CountryCards from "../CountryCards";
import { Navigate, useParams } from 'react-router-dom';
import "./SingleCountry.scss";

import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_SINGLE_COMPILATION } from '../../utils/queries';


export default function SingleCountry() {
    const { countryname: userParam } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION);
    const countries = data?.countries || [];
    const singleCountry = countries.slice(0, 1)

    return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {loading ? (
            <div>Loading...</div>
          ) : (
            <CountryCards
                countryProperties={singleCountry[0]}
            />
          )}
        </div>
    </div>
    )
}