import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { searchImgInput }  from '../../components/SingleCountryHeader';
import Auth from '../../utils/auth';

const Dashboard = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};
  
  // Store search history in local storage
  const [showSearchHistory, setShowSearchHistory] = useState(true);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!searchImgInput) {
      return false;
    }
    try {
      const response = await searchImage(searchImgInput);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const items = await response.json();

      //Randomly pick 4 images out of 10 results
      const newImgs = [];
      for (let i = 0; i < 8; i++) {
        const newImg = items.results[Math.floor(Math.random() * items.results.length)];
        newImgs.push(newImg);
      }
      console.log(newImgs);
      //Save search image to searchedImgs
      setSearchedImgs(newImgs);
    }
    catch (err) {
      console.error(err);
    }

  };

  // Get search history from local storage and set to state
  useEffect(() => {
    const data = window.localStorage.getItem('Search History');
    if (data !== null) {
      setShowSearchHistory(JSON.parse(data));
  }
  setShowSearchHistory(true)},);

  // Set search history in local storage when state changes
  useEffect(() => {
    window.localStorage.setItem('Search History', JSON.stringify(searchImgInput))
  }, [showSearchHistory]);

  // navigate to personal dashboard page if username matches param
  if (Auth.loggedIn() && Auth.getDashboard().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
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
            {({showSearchHistory}=true) ? {showSearchHistory} : 'No search history yet!'}
            <div className='singleCountryHeadTitle'>
        <h2 >{searchImgInput.toUpperCase()}</h2>
      </div>
      <div className="singleCountryInput">
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
      </div>
         </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
