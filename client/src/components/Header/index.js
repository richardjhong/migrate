import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchImage } from '../../utils/API';


import Auth from '../../utils/auth';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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
      for (let i = 0; i < 4; i++) {
        const newImg = items.results[Math.floor(Math.random() * items.results.length)];
        newImgs.push(newImg);
      }
      console.log(newImgs);
      setSearchedImgs(newImgs);
    }
    catch (err) {
      console.error(err);
    }

  };


  return (
    <header className="bg-info text-dark mb-4 display-flex align-center">
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
              <h1 text-pastel_green>{searchImgInput.toUpperCase()}</h1>
            </div>
          </div>
          <div className="flex flex-row mt-1 mx-2">
            <input
              className="w-1/5 border rounded border-text-blustery_blue"
              type="text"
              placeholder="Search Country"
              value={searchImgInput}
              onChange={(e) => setSearchImgInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="btn ml-1 px-3 py-1 bg-pastel_green rounded text-blustery_blue"
            >
              Search
            </button>
          </div>
        </div>
        {/* <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Migrate
          </h1>
        </Link> */}
        {/* <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Testing
        </p>
        <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> */}
      </div>
    </header >
  );
};

export default Header;
