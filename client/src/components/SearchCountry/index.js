import React, { useState } from 'react';
import { searchImage } from '../../utils/API';
import { useQuery } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import "./SearchCountry.scss";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';

const SearchCountry = ({ countryYearIndex, setCountryYearIndex }) => {

  const { searches, addSearch } = useSearch();
  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.countryname);
  let navigate = useNavigate();


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

      const newImgs = [];
      items.results.forEach(item => {
        const newImg = {
          src: item.urls.regular,
          alt: item.alt_description,
        };
        newImgs.push(newImg);

      });
      const newSearch = {
        name: searchImgInput,
        imgs: newImgs
      }
      //if data isn't exist in localStorage, save it to localStorage
      if (searches.findIndex(country => country.name === searchImgInput) === -1) {
        await addSearch(newSearch);
      }

      navigate(`/SingleCountry/${searchImgInput}`);


    }
    catch (err) {
      console.error(err);
    }

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
    <div>
      <div className="singleCountryInput">
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
        {suggestions && suggestions.map((suggestions, i) =>
          <div className='suggestion'
            key={i}
            onClick={() => onSuggestHandler(suggestions.countryname)}

          >{suggestions.countryname}</div>
        )}
      </div>
      <button onClick={() => setModalOpen(true)}>Open Map</button>
      <Modal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          countryYearIndex={countryYearIndex} 
          setCountryYearIndex={setCountryYearIndex} 
      />
    </div>
  );
};

export default SearchCountry;

