import React from 'react';
// import { Link } from 'react-router-dom';
import SearchCountry from '../SearchCountry';


const searchHistoryList = ({searchHistory}) => { ///search history is an array of objects stored in the user model
  if (!searchHistory) {
    return <h3>No Searches Saved Yet</h3>;
  }

  return (
    <div>
      <SearchCountry
      {...searchHistory &&
        searchHistory.map((search) => (
          <div>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <span style={{ fontSize: '1rem' }}>
                You searched for {search.country} on {search.createdAt}
              </span>
            </h4>
          </div>
        ))}
        />
    </div>
  );
};

export default searchHistoryList;
