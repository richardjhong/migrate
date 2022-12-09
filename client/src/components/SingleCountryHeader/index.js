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
  const [suggestions, setSuggestions]=useState([]);
  const { loading, data } = useQuery(QUERY_COMPILATIONS);
  const countries = data?.countryCompilations || [];
  const countryName=countries.map(data=>data.name);
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

      //Randomly pick 4 images out of 10 results
      const newImgs = [];
      for (let i = 0; i < 4; i++) {
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

  const onChangeHandler= (text)=>{
    let matches=[];
    console.log(matches);
    if(text.length>0){
      matches = countries.filter(country=>{
        const regex = new RegExp(`${text}`,"gi");
        return country.name.match(regex)
      })
    }
    console.log('matches',matches);
    setSuggestions(matches);
    setSearchImgInput(text);

   

  }

  const onSuggestHandler = (text)=> {
    setSearchImgInput(text);
    setSuggestions([]);
 }

  return (
    <div className="bg-info text-dark mb-4 display-flex align-center">
      <div>
        <div className="header-container max-h-44">
          <div className='relative flew-col'>
            <div className="flex flex-row max-h-44 max-w-lg">
              {searchedImgs.map((val) => {
                return (
                  <img
                    className="w-full"
                    src={val.urls.regular}
                    alt={val.alt_description}
                  />
                );
              })}
            </div>
            <div className='country-text border border-2 border-green_pear font-extrabold text-4xl px-4 py-1 bg-blustery_blue absolute bottom-10 left-10'>
              <h1 >{searchImgInput.toUpperCase()}</h1>
           
            </div>
          </div>
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
            onClick={()=> onSuggestHandler(suggestions.name)}

            >{suggestions.name}</div>
            )}
          </div>
        </div>
      </div>
    </div >
  );

};

export default SingleCountryHeader;
