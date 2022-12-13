import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import airplane from '../../images/airplaneArt.png'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import './Signup.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
      
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <Header />
    <main>
     
          
          <div className="signupForm">
            <h2>Signup and your last five searches will be saved so you can easily revisit a country to look at their information.</h2>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h2>Sign Up</h2>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
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
                  placeholder="Your password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="">
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

export default Signup;
