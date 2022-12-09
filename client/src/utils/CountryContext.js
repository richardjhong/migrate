import React, {createContext,useState, useContext, useEffect } from 'react';
import {getSavedCountries,getSavedImgs,saveImgs, saveCountries} from './localStorage';

export const SearchContext = React.createContext();
export const useSearch = () => useContext(SearchContext);

export const SearchProvider=({children})=>{
    const [searches, setSearches]=useState(getSavedCountries());
    const [countryImgs, setCountryImgs] = useState(getSavedImgs());

    useEffect(() => {
      return () => saveCountries(searches);
    });
    useEffect(() => {
      return () => saveImgs(countryImgs);
    });

   
    const addSearch = (search)=>{
        
        setSearches([search,...searches]);
        saveCountries(searches);
        
    }
    const addCountryImgs = (imgs)=>{
        
        setCountryImgs(imgs);
        saveImgs(countryImgs);
    }

      // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <SearchContext.Provider value={{ searches, countryImgs, addSearch, addCountryImgs }}>
      {children}
    </SearchContext.Provider>
  );
}

