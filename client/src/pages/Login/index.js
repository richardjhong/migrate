import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import airplane from '../../images/airplaneArt.png'
import './Login.scss'

import Auth from '../../utils/auth.js';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      navigate(`/dashboard`);

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Header />
      <main >


        <div className="loginForm">
          <h2>Login to see your saved searches so you can review them and also to manage your personal information.</h2>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (


            <form onSubmit={handleFormSubmit}>
              <h2 >Login</h2>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="enter your password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className=""

                type="submit"
              >
                Submit
              </button>
            </form>

          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
        <div className='airplaneHangar'>
          <img src={airplane} alt='airplane illustration flying away'></img>
        </div>

      </main>
      <Footer />
    </>
  );
};


export default Login;
