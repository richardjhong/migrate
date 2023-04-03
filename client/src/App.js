import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CountryListing from './pages/CountryListing';
import Splash from './pages/Splash/index'
import AboutUs from './pages/AboutUs';
import HowTo from './pages/HowTo';
import SingleCountryCont from './pages/SingleCountryCont';
import Wizard from './pages/Wizard';

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


export const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [countryYearIndex, setCountryYearIndex] = useState(9);
  const [currentSearchedCountry, setCurrentSearchedCountry] = useState("");

  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <HashRouter>
          <Routes>
            <Route
              path='/AboutUs'
              element={<AboutUs />}
            />
            <Route
              path='/HowTo'
              element={<HowTo />}
            />
            <Route
              index
              element={
                <Splash 
                  countryYearIndex={countryYearIndex} 
                  setCountryYearIndex={setCountryYearIndex} 
                  currentSearchedCountry={currentSearchedCountry} 
                  setCurrentSearchedCountry={setCurrentSearchedCountry}
                />
              }
            />
            <Route
            path="/form"
            element={<Form />}
            />  
            <Route
            path="/Wizard"
            element={<Wizard />}
            />

            {/* <Route
              path="/SingleCountry"
              element={<SingleCountryCont />}
            /> */}
            <Route
              path="/SingleCountry/:countryname"
              element={<SingleCountryCont 
                          countryYearIndex={countryYearIndex} 
                          setCountryYearIndex={setCountryYearIndex} 
                          currentSearchedCountry={currentSearchedCountry} 
                          setCurrentSearchedCountry={setCurrentSearchedCountry}
                        />}
            />
            {/* <Route
              path="/listings"
              element={<CountryListing />}
            /> */}
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
              element={<Dashboard countryYearIndex={countryYearIndex} 
              setCountryYearIndex={setCountryYearIndex}
              currentSearchedCountry={currentSearchedCountry}
              setCurrentSearchedCountry={setCurrentSearchedCountry}/>} />
            <Route 
              path="/dashboard/:username" 
              element={<Dashboard countryYearIndex={countryYearIndex} 
              setCountryYearIndex={setCountryYearIndex}
              currentSearchedCountry={currentSearchedCountry}
              setCurrentSearchedCountry={setCurrentSearchedCountry}/>}
            />
            <Route
              path="/*"
              element={<Splash />}
            />
          </Routes>
        </HashRouter>
      </SearchProvider>


    </ApolloProvider>
  );
}

export default App;
