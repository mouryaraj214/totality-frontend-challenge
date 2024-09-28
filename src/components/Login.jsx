import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css'; 

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const isSuccess = login(username, password);

    if (isSuccess) {
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      setUsername('');
      setPassword('');
    } else {
      setErrorMessage('Invalid username or password.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
