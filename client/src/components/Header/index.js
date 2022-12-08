import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

import Auth from '../../utils/auth';

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };




  return (
    <header >
      
        <Link className="text-dark" to="/">
          <h1 >
            Migrate
          </h1>
        </Link> 
        <nav className='navbar'>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="navLink" to="/login">
                Login
              </Link>
              <Link className="navLink" to="/signup">
                Signup
              </Link>
            </>
          )}
        </nav> 
      
    </header >
  );
};

export default Header;
