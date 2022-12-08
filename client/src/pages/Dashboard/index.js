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
  const [showSearchHistory, setShowSearchHistory] = useState(true);

  // Get search history from local storage and set to state
  useEffect(() => {
    const data = window.localStorage.getItem('Search History');
    if (data !== null) {
      setShowSearchHistory(JSON.parse(data));
  }}, []);

  // Set search history in local storage when state changes
  useEffect(() => {
    window.localStorage.setItem('Search History', JSON.stringify(showSearchHistory))
  }, [showSearchHistory]);

  // store search history in local storage and render country name and image upon page load
  const searchHistory = JSON.parse(localStorage.getItem('Search History')) || [];

  // const searchHistoryContent = searchHistory.map((searchHistory) =>
  //   <div>
  //     <img src={searchHistory.flag} alt={searchHistory.name} />
  //     <p>{searchHistory.name}</p>
  //   </div>
  // );

  // let lastSearch = searchHistory[searchHistory.length - 1];
  // let searchHistoryContent;
	// if(searchHistory) { 
	// 	for (var i = 0; i < 3; i++) {
	// 	// const searchHistoryContent = searchHistory.map((searchHistory) => 
  //   }}

  // navigate to personal profile page if username matches param
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
          Welcome {userParam ? `back, ${user.username}!` : 'Welcome!'} Continue where you left off..
        </h2>
        <div>
{     searchHistoryContent}
  </div>
        <div>
         
        </div>
        {!userParam && (
          <div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
