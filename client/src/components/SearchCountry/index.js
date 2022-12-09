import React, { useState, useEffect } from 'react';
import { searchImage } from '../../utils/API';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';


const SearchCountry = () => {
  const { searches, countryImgs, addSearch, addCountryImgs } = useSearch();

  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [searchedImgs, setSearchedImgs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.name);


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
      addSearch(searchImgInput);
      
      const items = await response.json();

      //Randomly pick 4 images out of 10 results
      const newImgs = [];
      for (let i = 0; i < 4; i++) {
        const newImg = items.results[Math.floor(Math.random() * items.results.length)];
        newImgs.push(newImg);
      }
      addCountryImgs(newImgs);

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
        return country.name.match(regex)
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

    <div className="flex flex-row mt-1 mx-2">
      <input
        className="w-1/5 border rounded border-text-blustery_blue"
        type="text"
        placeholder="Search Country"
        value={searchImgInput}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleFormSubmit}
        className="btn ml-1 px-3 py-1 bg-pastel_green rounded text-blustery_blue"
      >
        Search
      </button>
      {suggestions && suggestions.map((suggestions, i) =>
        <div className='suggestion'
          key={i}
          onClick={() => onSuggestHandler(suggestions.name)}

        >{suggestions.name}</div>
      )}
    </div>

  );
};

export default SearchCountry;

