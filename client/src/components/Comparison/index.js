import React, { useState, useEffect } from 'react';
import SwitchToggle from '../SwitchToggle';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { capitalizeFirstLetter } from '../../utils/helper';
import Modal from '../Modal';
import './Comparison.scss';

const CompareCountry = ({
  comparisonEnabled,
  setComparisonEnabled,
  baseCountry,
  comparedCountry,
  setComparedCountry,
  comparedCountryData,
  setComparedCountryData,
  countryYearIndex,
  setCountryYearIndex,
  currentSearchedCountry,
  setCurrentSearchedCountry
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const [width, setWidth] = useState(window.innerWidth);
  const [delayedCompare, { loading: comparedCountryLoading, data: newComparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);
  const breakPoint = 1000;

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
        return country.countryname !== baseCountry && country.countryname.match(regex)
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
    <div className="compareContainer">
      <div className='compToggleCont'>
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
            countryYearIndex={countryYearIndex}
            setCountryYearIndex={setCountryYearIndex}
            currentSearchedCountry={currentSearchedCountry}
            setCurrentSearchedCountry={setCurrentSearchedCountry}
            comparisonEnabled={true}
            comparedCountry={comparedCountry}
            setComparedCountry={setComparedCountry}
            comparedCountryData={comparedCountryData}
            setComparedCountryData={setComparedCountryData}
          />
        </>
      }
      
    </div>
  )
}

export default CompareCountry;