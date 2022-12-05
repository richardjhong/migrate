import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_COUNTRIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_COUNTRIES);
  const countries = data?.countries || [];

  return (
    <main>
      <div className="flex-row justify-center">
        Test
        {console.log('testing: ', countries)}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : console.log('testing: ', countries)}
        </div>
      </div>
    </main>
  );
};

export default Home;