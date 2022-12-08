import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import "./dashboard.scss";

const Dashboard = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};
  
  // Store search history in local storage
  let [showSearchHistory, setShowSearchHistory] = useState(true);
  let storedSearches = JSON.parse(window.localStorage.getItem('searchHistory'));
// Get search history from local storage and set to state
  useEffect(() => {
     if (storedSearches !== null) {
        setShowSearchHistory(storedSearches);
      }
  },  [storedSearches]);

  // navigate to personal dashboard page if username matches param
  if (Auth.loggedIn() && Auth.getDashboard().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div>
      <h4>
        You need to be logged in to see this. Use the navigation links below to
        sign up or log in!
       </h4>
       <button><a href="https://migrate.com/login ">Login</a></button>
       </div>
    );
  }


  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome {userParam ? `back, ${user.username} continue where you left off.. !` : `back, ${user.username}!`} 
        </h2>
          <div>
            <h3>Search History</h3>
            {storedSearches ? storedSearches : 'No search history yet!'}
            <div className='singleCountryHeadTitle'>
      </div>
      {/* <div className="singleCountryInput">
        <input
          className=""
          type="text"
          placeholder="Search Country"
          value={searchImgInput}
          onChange={(e) => setSearchImgInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleFormSubmit}
          className=""
        >
          Search
        </button>
      </div> */}
         </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
