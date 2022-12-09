import CountryCards from "../CountryCards";
import "./SingleCountry.scss";
import { useParams } from 'react-router-dom';
import Loader from "../Loader";


import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_SINGLE_COMPILATION, QUERY_COUNTRY } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';

// const { countryname: countryParam } = useParams();
// const { loading, data } = useQuery(countryParam ? QUERY_SINGLE_COMPILATION : QUERY_COUNTRIES, {
//   variables: {countryname: countryParam}
// });
// const countries = data?.singleCompileCountry || data?.countries || [];

export default function SingleCountry() {
  const { searches, countryImgs} = useSearch();

  const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION,{
    variables:{countryname : searches[0]}
  });

  const singleCountry = data?.singleCompileCountry.year_catalog || [];
  console.log(singleCountry);

    return(
    <div className='containerCenter'>
        <div className='countryCardContainer'>
        {loading ? (
            <Loader />
          ) : (
            <CountryCards
                countryProperties={singleCountry}
            />
          )}
        </div>
    </div>
    )
}
