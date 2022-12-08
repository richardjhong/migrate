import React, { useState, useEffect } from 'react';
import { searchImage } from '../../utils/API';
import './SingleCountryHeader.scss';

const SingleCountryHeader = () => {

  //For Search country
  const [searchImgInput, setSearchImgInput] = useState("");
  const [searchedImgs, setSearchedImgs] = useState([]);

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


  return (
    <>
      {/* <div className='singleCountHeadCont'> */}
      <div className="singleCountryHead">

        {searchedImgs.map((val) => {
          return (
            <img
              className="singleCountryImage"
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
          onChange={(e) => setSearchImgInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleFormSubmit}
          className=""
        >
          Search
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default SingleCountryHeader;
