import CountryCards from "../CountryCards";
import { Navigate, useParams } from 'react-router-dom';
import "./SingleCountry.scss";

import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_SINGLE_COMPILATION, QUERY_COUNTRY } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';



export default function SingleCountry() {
  const { searches, countryImgs} = useSearch();
  console.log(searches[0]);


  const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION,{
    variables:{countryname : searches[0]}
  });
  console.log(data);
  const country = data?.singleCompileCountry.year_catalog[4] || [];
  const singleCountry = country;

  console.log(singleCountry);


    return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {loading ? (
            <div>Loading...</div>
          ) : (
            <CountryCards
                countryProperties={singleCountry}
            />
          )}
        </div>
    </div>
    )
}