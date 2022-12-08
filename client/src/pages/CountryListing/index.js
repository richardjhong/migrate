import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_COMPILATIONS } from '../../utils/queries';

import CountryList from '../../components/CountryList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_COUNTRIES);
  const countries = data?.countries || [];

  const { otherloading, otherdata } = useQuery(QUERY_COMPILATIONS)

  const compilations = otherdata?.countries || [];

  const firstTwoCountries = countries.slice(0, 5);

  // console.log('testing: ', compilations)

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CountryList
              countries={firstTwoCountries}
              title="Country Listings"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;