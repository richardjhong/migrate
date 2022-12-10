import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import SearchHistoryList from '../../components/SearchHistory';
import Auth from '../../utils/auth';
import "./dashboard.scss";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const handleLogout = async (e) => {
    e.preventDefault();
    if (Auth.loggedIn()) {
      localStorage.removeItem("id_token");
      <Navigate to="/splash" />;
    }
  };

  // navigate to personal dashboard page if username matches param
  if (Auth.loggedIn() && Auth.getDashboard().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <>
        <Header />
        <div>
          <h4>
            You need to be logged in to see this. Use the navigation links below to
            sign up or log in!
          </h4>
          <button><a href="/login">Login</a></button>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <main class='dashMain'>
        <div className="flex-row justify-center mb-3">
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            Welcome {userParam ? `back, ${user.username} continue where you left off.. !` : `back, ${user.username}!`}
          </h2>
          <div>
            <h3>Your Most Recent Search: </h3>
            <div className='savedSearchCard' >
              <SearchHistoryList
                thoughts={user.searchHistory}
                title={`${user.username}'s search history...`}
                showTitle={false}
                showUsername={false}
              />
            </div>
          </div>
        </div>
        <button type="submit" onClick={handleLogout}>Log Out</button>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
