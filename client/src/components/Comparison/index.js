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
  const [delayedCompare, { loading: comparedCountryLoading, data: newComparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);

  const countries = data?.countryCompilations || [];

  useEffect(() => {
    if (!comparedCountryLoading && newComparedCountryData) {
      setComparedCountryData(newComparedCountryData?.singleCompileCountry?.year_catalog || [])
    }
  }, [comparedCountryLoading, newComparedCountryData, setComparedCountryData]);

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
      delayedCompare({ variables: { countryname: capitalizeFirstLetter(comparedCountry) }});
    }
    catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="compareContainer">
      {comparisonEnabled && 
        <>
         <div className="singleCountryInput">
           <input
             className=""
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
           <button onClick={() => setModalOpen(true)}>Open Map</button>
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
      <SwitchToggle 
        isOn={comparisonEnabled}
        handleToggle={() => setComparisonEnabled(!comparisonEnabled)}
        onColor="#06D6A0"
        offColor="#EF476F"
        />
      <p className="toggleText">Compare Countries</p>
    </div>
  )
}

export default CompareCountry;