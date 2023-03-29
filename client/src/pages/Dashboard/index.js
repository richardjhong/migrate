import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import "./dashboard.scss";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PolarChart from '../../components/CountryPolarChart'
import FiveSavedSearches from '../../components/FiveSavedSearches';

const Dashboard = ({ countryYearIndex, setCountryYearIndex, currentSearchedCountry, setCurrentSearchedCountry }) => {
let navigate = useNavigate();
  const { username: userParam } = useParams();
  const { loading: loadingC, data: dataC } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  

  const user = dataC?.me || dataC?.user || {};
  let lastFiveSearches=(dataC?.me?.searchHistory)
  
  const { searches } = useSearch();

  
  if (loadingC) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <>
        <Header />
        <main className='dashMain'>
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
      <main className='dashMain'>
        <div className="">
          <h2 className="">
            Welcome {userParam ? `back, ${user.username} continue where you left off.. !` : `back, ${user.username}!`}
          </h2>
          <div>
            <h3>Your Most Recent Searches: </h3>
            <p>Key: bhn = "Basic Human Needs", opp = "Opportunity", fow = "Foundations of Wellness"</p>
            <div className="dashboardContainer">
              {/* <div className='savedSearchCard' > */}
                {loadingC ? (
                  <>
                    <div>Loading...</div>
                  </>
                ) :
                  <>
                  {lastFiveSearches.map((country, i) => (
                  <FiveSavedSearches key={i} country={country}/>
                  ))}
                  </>
                  // searches && searches.filter((search,i)=>i>=searches.length-5&&i<=searches.length).map((search, i) => (
                  //   <div className='savedSearchCard' key={i}>
                  //   <div >
                  //     <h2 className="">
                  //       <button onClick={()=>{
                  //        navigate(`/SingleCountry/${search.name}`);
                  //       }
                  //       }>{search.name}</button>
                  //       {/* <a href={`/sin=>{gleCountry/${search.name}`}>{search.name}</a> */}
                  //     </h2>
                  //     <div className='dashCountryScore'>
                  //     <p>Overall Rank:{search.rank_score_spi}</p> <p>Score:{search.score_spi}</p>
                  //     </div>
                  //     <PolarChart
                  //     fields={
                  //       {"opp":search.score_opp,
                  //       "fow":search.score_fow,
                  //       "bhn":search.score_bhn,
                  //     }
                  //     } 
                      
                  //     />
                  //   </div>
                  //   </div>
                  // ))
                  }
              {/* </div> */}
              <div className='dashSearch'>
                <SearchCountry countryYearIndex={countryYearIndex} 
                            setCountryYearIndex={setCountryYearIndex}
                            currentSearchedCountry={currentSearchedCountry}
                            setCurrentSearchedCountry={setCurrentSearchedCountry} />
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
