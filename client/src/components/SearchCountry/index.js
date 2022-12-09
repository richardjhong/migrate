import React, { useState, useEffect } from 'react';
import { searchImage } from '../../utils/API';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import "./SearchCountry.scss";
import { useNavigate } from 'react-router-dom';

const SearchCountry = () => {
  const { searches, countryImgs, addSearch, addCountryImgs } = useSearch();

  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [searchedImgs, setSearchedImgs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.countryname);
  let navigate=useNavigate();


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
      console.log(items);

      //Randomly pick 4 images out of 10 results
      const newImgs = [];
      for (let i = 0; i < items.results.length; i++) {
        // const newImg = items.results[Math.floor(Math.random() * items.results.length)];
        const newImg = items.results[i];
        newImgs.push(newImg);
      }
      await addSearch(searchImgInput);
      await addCountryImgs(newImgs);
      console.log(newImgs);
      console.log('search',searches);
      navigate(`/SingleCountry/${searchImgInput}`);

      // <Navigate to="/SingleCountry" replace={true} />
      
    
      //window.location.replace(`/SingleCountry`);
      // window.location.replace(`/SingleCountry/${searches[0]}`);

    }
    catch (err) {
      console.error(err);
    }

  };
  const onChangeHandler = (text) => {
    let matches = [];
    console.log(matches);
    if (text.length > 0) {
      matches = countries.filter(country => {
        const regex = new RegExp(`${text}`, "gi");
        return country.countryname.match(regex)
      })
    }
    console.log('matches', matches);
    setSuggestions(matches);
    setSearchImgInput(text);

  }

  const onSuggestHandler = (text) => {
    setSearchImgInput(text);
    setSuggestions([]);
  }

  return (

    <div className="singleCountryInput">
      <input
        className=""
        type="text"
        placeholder="Search Country"
        value={searchImgInput}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleFormSubmit}
        className=""
      >
        Search
      </button>
      {suggestions && suggestions.map((suggestions, i) =>
        <div className='suggestion'
          key={i}
          onClick={() => onSuggestHandler(suggestions.countryname)}

        >{suggestions.countryname}</div>
      )}
    </div>

  );
};

export default SearchCountry;
