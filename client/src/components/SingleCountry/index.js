import CountryCards from "../CountryCards";
import "./SingleCountry.scss";

import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES } from '../../utils/queries';


export default function SingleCountry() {
    const { loading, data } = useQuery(QUERY_COUNTRIES);
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