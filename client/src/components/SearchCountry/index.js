import React, { useState, useEffect } from 'react';
import { searchImage } from '../../utils/API';
import { resizeWindow } from '../../utils/helper.js'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_COMPILATIONS } from '../../utils/queries';
import { useSearch } from '../../utils/CountryContext';
import { DrawerProvider } from '../../utils/DrawerContext';
import "./SearchCountry.scss";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import { ADD_SEARCH_HISTORY } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import GeoChart from '../GeoChart'

const SearchCountry = () => {
  const { 
    searches, 
    addSearch, 
    setCurrentSearchedCountry  
 } = useSearch();
  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [addCountry, { error }] = useMutation(ADD_SEARCH_HISTORY);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName = countries.map(data => data.countryname);
  let navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 900;
  const { loading: loadingC, data: dataC } = useQuery(QUERY_ME);

  useEffect(() => {
    resizeWindow(setWidth);
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

    try {
      await addCountry({ variables: {userId: dataC.me._id,  searchedCountries: searchImgInput } });
    } catch (err) {
      console.log(err);
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

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <DrawerProvider>
        <div className="singleCountryInput">
          <div className='splashOpenMap'>
          {width > breakPoint && <button onClick={() => setModalOpen(true)}>Open Interactive Map</button>}
          </div>
          <input
            type="text"
            placeholder="Search Country"
            value={searchImgInput}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
          <button type="submit" onClick={handleFormSubmit}>
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
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <GeoChart onClose={closeModal} />
        </Modal>
      </DrawerProvider>
    </>
  );
};

export default SearchCountry;

