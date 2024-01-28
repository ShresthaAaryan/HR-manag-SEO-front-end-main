import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="url-form-container">
      <main className="main-content">
        <form className="registration" onSubmit={handleSubmit}>
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
      </main>
    </div>
  );
}

export default Login;