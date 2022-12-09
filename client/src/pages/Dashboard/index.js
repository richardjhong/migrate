import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import SearchCountry from '../../components/SearchCountry';
import { useSearch } from '../../utils/CountryContext';
import { QUERY_SINGLE_COMPILATION} from '../../utils/queries';
import Auth from '../../utils/auth';
import "./dashboard.scss";
import { saveCountries } from '../../utils/localStorage';

const Dashboard = () => {

  
  const { username: userParam } = useParams();
  const { loading: loadingC, data: dataC  } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam}
  });
  const user = dataC?.me || dataC?.user || {};

  const { searches } = useSearch();
  console.log(searches);

  const { loading, data } = useQuery(QUERY_SINGLE_COMPILATION,{
    variables:{countryname : searches[0]}
  });
  console.log(loading, data)

  const handleLogout = async (e) => {  
    e.preventDefault();
      if (Auth.loggedIn()) {     
        localStorage.removeItem("id_token");
        <Navigate to="/splash"/>;
     }
    };

  // navigate to personal dashboard page if username matches param
  if (Auth.loggedIn() && Auth.getDashboard().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loadingC) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div>
      <h4>
        You need to be logged in to see this. Use the navigation links below to
        sign up or log in!
       </h4>
       <button><a href="/login">Login</a></button>
       </div>
    );
    }
  return (
    <div key={user.saveCountries}>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome {userParam ? `back, ${user.username} continue where you left off.. !` : `back, ${user.username}!`} 
        </h2>
          <div >
            <h3 key={user}>Your Most Recent Searches: </h3>
            <div className='countryCard' id="col2row1">
            {loading ? (
                <div>Loading...</div>
              ) : 
             searches && searches.map((search) => (
            <div>
              <h4 className="card-header bg-primary text-light p-2 m-0">
                <a href='/singleCountry/${search}'>{search}</a>
              </h4>
            </div>
          )) } 
          </div>
          <div>
            <h3>Start a new search here: <SearchCountry className="button"/></h3>
          </div>
        </div>
       
        <button type="submit" onClick={handleLogout}>Log Out</button>
    </div>
    </div>
  );
};

export default Dashboard;
