import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export function Registration() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handlePostRequest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const endpoint = 'https://yourserver.com/api/register';
    const userData = { userName, email, password };

    try {
      const response = await axios.post(endpoint, userData);
      console.log('Registration successful:', response.data);
      setMessage('Registration successful!');
      // Additional logic after successful registration, like redirecting
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      setMessage('Registration failed: ' + (error.response ? error.response.data : error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userName') setUserName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </nav>
      </div>
      <div className="url-form-container">
        <main className="main-content">
          <form className="registration" onSubmit={handlePostRequest}>
            <div className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="UserName"
                value={userName}
                onChange={handleChange}
                className="txt-input" />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className="txt-input" />
            </div>
            <div className="input-group">
              <input 
                type={showInput ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                className="txt-input" />
              <button type="button" onClick={togglePasswordVisibility} className="password-toggle">
                <FontAwesomeIcon icon={showInput ? faEyeSlash : faEye} />
              </button>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </main>
      </div>
    </>
  );
}

export default Registration;