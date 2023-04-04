import React, { useState, useEffect } from 'react';
import SwitchToggle from '../SwitchToggle';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { capitalizeFirstLetter } from '../../utils/helper';
import { useSearch } from '../../utils/CountryContext';
import { useDrawer } from '../../utils/DrawerContext';
import Modal from '../Modal';
import ReactTooltip from 'react-tooltip';
import './CompareCountry.scss';

const CompareCountry = () => {
  const {
    currentSearchedCountry
  } = useSearch();
  const {
    comparisonEnabled,
    setComparisonEnabled,
    comparedCountry,
    setComparedCountry,
    setComparedCountryData
  } = useDrawer();
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const [width, setWidth] = useState(window.innerWidth);
  const [delayedCompare, { loading: comparedCountryLoading, data: newComparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);
  const breakPoint = 900;

  const countries = data?.countryCompilations || [];

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // Remove extra }); here
  if (!comparedCountryLoading && newComparedCountryData) {
    setComparedCountryData(newComparedCountryData?.singleCompileCountry?.year_catalog || [])
  }


  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {

      matches = countries.filter(country => {
        const regex = new RegExp(`${text}`, "gi");
        return country.countryname !== currentSearchedCountry && country.countryname.match(regex)
      })
    }
    setSuggestions(matches);
    setComparedCountry(text);
  }

  const onSuggestHandler = (text) => {
    setComparedCountry(text);
    setSuggestions([]);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      delayedCompare({ variables: { countryname: capitalizeFirstLetter(comparedCountry) } });
      setSuggestions([]);
    }
    catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='compToggleCont' data-for="comp-tooltip" data-tip="Only valid with line graphs">
      <ReactTooltip id="comp-tooltip" />
      <SwitchToggle
        isOn={comparisonEnabled}
        handleToggle={() => setComparisonEnabled(!comparisonEnabled)}
        onColor="#06D6A0"
        offColor="#04566e"
      />
      <p className="toggleText">Compare Countries</p>
      </div>
      {comparisonEnabled &&
        <>
          <div className="singleCountryInput">
            <div className='splashOpenMap'>
            {width > breakPoint && <button onClick={() => setModalOpen(true)}>Open Interactive Map</button>}
            </div>
            <input
              type="text"
              placeholder="Search Country"
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
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </>
      } 
      </>
  )
}

export default CompareCountry;