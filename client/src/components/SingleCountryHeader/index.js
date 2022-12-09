import React, { useState } from 'react';
import { searchImage } from '../../utils/API';
import './SingleCountryHeader.scss';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_ME, QUERY_SEARCH_HISTORY } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_SEARCH_HISTORY } from '../../utils/mutations';
import Auth from '../../utils/auth';


const SingleCountryHeader = () => {

  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [searchedImgs, setSearchedImgs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.countryname);
  console.log(countries);


  const Searches = () => {
    const [searchImage, { error }] = useMutation(ADD_SEARCH_HISTORY, {
      update(cache, { data: { addSearchHistory } }) {
        try {
          const { searches } = cache.readQuery({ query: QUERY_SEARCH_HISTORY });
  
          cache.writeQuery({
            query: QUERY_SEARCH_HISTORY,
            data: { searchHistory: [addSearchHistory, ...searches] },
          });
        } catch (e) {
          console.error(e);
        }
  
        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, searchHistory: [...me.searchHistory, addSearchHistory] } },
        });
      },
    });
  };

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

      //Randomly pick 8 images out of 10 results
      const newImgs = [];
      for (let i = 0; i < 8; i++) {
        const newImg = items.results[Math.floor(Math.random() * items.results.length)];
        newImgs.push(newImg);
      }
      console.log(newImgs);
      //Save search image to searchedImgs
      setSearchedImgs(newImgs);
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
    <>
      {/* <div className='singleCountHeadCont'> */}
      <div className="singleCountryHead">

        {searchedImgs.map((val) => {
          return (
            <img
              className=""
              src={val.urls.regular}
              alt={val.alt_description}
            />
          );
        })}
      </div>
      <div className='singleCountryHeadTitle'>
        <h2 >{searchImgInput.toUpperCase()}</h2>
      </div>

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
    

    </>
  );

};

export default SingleCountryHeader;
