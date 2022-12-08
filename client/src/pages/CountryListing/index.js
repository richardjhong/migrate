import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES, QUERY_COMPILATIONS } from '../../utils/queries';

import CountryList from '../../components/CountryList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_COUNTRIES);
  // const countries = data?.countries || [];
  // const firstTwoCountries = countries.slice(0, 5);

  const { loading, data } = useQuery(QUERY_COMPILATIONS)

  const compilations = data?.countryCompilations || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CountryList
              compilations={compilations}
              title="Country Listings"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;