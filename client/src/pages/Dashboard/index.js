import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { QUERY_SINGLE_COMPILATION} from '../../utils/queries';
import Auth from '../../utils/auth';
import "./dashboard.scss";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PolarChart from '../../components/CountryPolarChart'

const Dashboard = () => {

  const { username: userParam } = useParams();
  const { loading: loadingC, data: dataC } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = dataC?.me || dataC?.user || {};

  const { searches } = useSearch();
  console.log(searches);

  // const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION, {
  //   variables: { countryname: searches[0] }
  // });
  // console.log(loading, data)

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   if (Auth.loggedIn()) {
  //     localStorage.removeItem("id_token");
  //     <Navigate to="/splash" />;
  //   }
  // };

  // navigate to personal dashboard page if username matches param
  if (Auth.loggedIn() && Auth.getDashboard().data.username === userParam) {
    return <Navigate to={`/dashboard`} />;
  }
  if (loadingC) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <>
        <Header />
        <main class='dashMain'>
        <div>
          <h4>
            You need to be logged in to see this. Use the navigation links below to
            sign up or log in!
          </h4>
          <button><a href="/login">Login</a></button>
        </div>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>

      <Header />
      <main class='dashMain'>
        <div className="">
          <h2 className="">
            Welcome {userParam ? `back, ${user.username} continue where you left off.. !` : `back, ${user.username}!`}
          </h2>
          <div>
            <h3>Your Most Recent Searches: </h3>
            <div className="dashboardContainer">
              {/* <div className='savedSearchCard' > */}
                {loadingC ? (
                  <div>Loading...</div>
                ) :
                  searches && searches.map((search, i) => (
                    <div className='savedSearchCard' >
                    <div key={i}>
                      <h4 className="">
                        <a href={`/singleCountry/${search.name}`}>{search.name}</a>
                      </h4>
                      <p>Rank:{search.rank_score_spi} Score:{search.score_spi}</p>
                      <PolarChart
                      fields={
                        {"opp":search.score_opp,
                        "fow":search.score_fow,
                        "bhn":search.score_bhn,
                      }
                      } 
                      
                      />
                    </div>
                    </div>
                  ))}
              {/* </div> */}
              <div className='dashSearch'>
                <h3>Start a new search here: <SearchCountry className="button" /></h3>
              </div>
            </div>
            {/* <button type="submit" onClick={handleLogout}>Log Out</button> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
