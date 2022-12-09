import React, {createContext,useState, useContext } from 'react';

export const SearchContext = React.createContext();
export const useSearch = () => useContext(SearchContext);

export const SearchProvider=({children})=>{
    const [searches, setSearches]=useState([]);
    const [countryImgs, setCountryImgs] = useState([]);
    const addSearch = (search)=>{
        
        setSearches([search,...searches]);
    }
    const addCountryImgs = (imgs)=>{
        
        setCountryImgs(imgs);
    }

      // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <SearchContext.Provider value={{ searches, countryImgs, addSearch, addCountryImgs }}>
      {children}
    </SearchContext.Provider>
  );
}

