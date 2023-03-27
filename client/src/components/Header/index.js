import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss'
import heroImage from '../../images/homeBackground.png'

import Auth from '../../utils/auth';

const Header = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate(`/`);
  };

  const mediaQuery = window.matchMedia('(max-width: 500px)')  

  return (
    <header >

      <Link className="" to="/">
        <h1 >
          MIGRATE
        </h1>
      </Link>
      <nav className='navbar'>
        
        {Auth.loggedIn() ? (
          <>
            <Link className="navLink" to='/AboutUs'>
              About
            </Link>
            <Link className="navLink" to='/form'>
              Helper
            </Link>
            <Link className="navLink" to='/Wizard'>
              Wizard
            </Link>
            <Link className="navLink" to='/HowTo'>
              HowTo
            </Link>
            <Link className="navLink" to='/visa'>
              Next Steps
            </Link>
            <Link className="navLink" to="/dashboard">
              Dashboard
            </Link>
            <button className="" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            
            <Link className="navLink" to='/form'>
              Helper
            </Link>
            <Link className="navLink" to='/Wizard'>
              Wizard
            </Link>
            <Link className="navLink" to='/HowTo'>
              HowTo
            </Link>
            <Link className="navLink" to='/visa'>
              Next Steps
            </Link>
            <Link className="navLink" to="/login">
              Login
            </Link>
            <Link className="navLink" to="/signup">
              Signup
            </Link>
            <Link className="navLink" to='/AboutUs'>
              About
            </Link>
          </>
        )}
      </nav>

    </header >
  );
};

export default Header;
