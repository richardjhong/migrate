import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CountryListing from './pages/CountryListing';
import Splash from './pages/Splash/index'
import AboutUs from './pages/AboutUs';
import SingleCountryCont from './pages/SingleCountryCont';

import Form from './pages/Form';

import Visa from './pages/Visa';

import './App.scss';



import { SearchProvider } from './utils/CountryContext';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <Router>
          <Routes>
            <Route
              path='/AboutUs'
              element={<AboutUs />}
            />
            <Route
              index
              element={<Splash />}
            />

            <Route
            path="/form"
            element={<Form />}
            />  

            {/* <Route
              path="/SingleCountry"
              element={<SingleCountryCont />}
            /> */}
            <Route
              path="/SingleCountry/:countryname"
              element={<SingleCountryCont />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/visa"
              element={<Visa />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />} />
            <Route 
              path="/dashboard/:username" 
              element={<Dashboard />}
            />
            <Route
              path="/*"
              element={<Splash />}
            />
          </Routes>
        </Router>
      </SearchProvider>


    </ApolloProvider>
  );
}

export default App;
