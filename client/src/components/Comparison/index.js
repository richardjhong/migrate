import React, { useState, useEffect } from 'react';
import SwitchToggle from '../SwitchToggle';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_COMPILATIONS, QUERY_SINGLE_COMPILATION } from '../../utils/queries';
import { capitalizeFirstLetter } from '../../utils/helper';
import GeoChart from '../GeoChart';
import Modal from '../Modal';


const CompareCountry = ({ 
  enabled, 
  setEnabled, 
  baseCountry,
  comparedCountry, 
  setComparedCountry, 
  setComparedCountryData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const [delayedCompare, { loading: comparedCountryLoading, data: comparedCountryData }] = useLazyQuery(QUERY_SINGLE_COMPILATION);

  const countries = data?.countryCompilations || [];

  useEffect(() => {
    if (!comparedCountryLoading && comparedCountryData) {
      setComparedCountryData(comparedCountryData?.singleCompileCountry?.year_catalog || [])
    }
  }, [comparedCountryLoading, comparedCountryData]);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');

    try {
      delayedCompare({ variables: { countryname: capitalizeFirstLetter(comparedCountry) }});
    }
    catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <span>Compare Countries</span>
      <SwitchToggle 
        isOn={enabled}
        handleToggle={() => setEnabled(!enabled)}
        onColor="#06D6A0"
        offColor="#EF476F"
      />
      {enabled && 
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
           {suggestions && suggestions.map((suggestions, i) =>
             <div className='suggestion'
               key={i}
               onClick={() => onSuggestHandler(suggestions.countryname)}
   
             >{suggestions.countryname}</div>
           )}
         </div>
         <button onClick={() => setModalOpen(true)}>Open Map</button>
         <Modal 
          message="Hello World!" 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          />
       </>
      }
      <GeoChart />
    </div>
  )
}

export default CompareCountry;