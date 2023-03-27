import React, { useState, useEffect } from 'react';
import { searchImage } from '../../utils/API';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import "./SearchCountry.scss";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import OpenModal from '../OpenModal';

const SearchCountry = ({ countryYearIndex, setCountryYearIndex, currentSearchedCountry, setCurrentSearchedCountry }) => {
  const { searches, addSearch } = useSearch();
  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.countryname);
  let navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 2000;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!searchImgInput) {
      return false;
    }
    const searchedImages = await searchImage(searchImgInput);

    //if data doesn't exist in localStorage, save it to localStorage
    if (searches.findIndex(country => country.name === searchImgInput) === -1) {
      await addSearch(searchedImages);
    }
    setSuggestions([]);
    setCurrentSearchedCountry(searchImgInput);
    navigate(`/SingleCountry/${searchImgInput}`);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter(country => {
        const regex = new RegExp(`${text}`, "gi");
        return country.countryname.match(regex)
      })
    }
    setSuggestions(matches);
    setSearchImgInput(text);
  }

  const onSuggestHandler = (text) => {
    setSearchImgInput(text);
    setSuggestions([]);
  }

  return (
    <div className='splashSearchCont'>
      <div className='singleCountryCont'>


        <div className="singleCountryInput">
          <div className='splashOpenMap'>
            <button onClick={() => setModalOpen(true)}>Open Interactive Map</button>
            {/* <OpenModal /> */}
          </div>
          <input
            type="text"
            placeholder="Search Country"
            value={searchImgInput}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleFormSubmit}
          >
            Search
          </button>
        </div>
        <div className='suggestionCont'>
          {suggestions && suggestions.map((suggestions, i) =>
            <div className='suggestion'
              key={i}
              onClick={() => onSuggestHandler(suggestions.countryname)}


            >{suggestions.countryname}</div>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        countryYearIndex={countryYearIndex}
        setCountryYearIndex={setCountryYearIndex}
        currentSearchedCountry={currentSearchedCountry}
        setCurrentSearchedCountry={setCurrentSearchedCountry}
      />
    </div>
  );
};

export default SearchCountry;

