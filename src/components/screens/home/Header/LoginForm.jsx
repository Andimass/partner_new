import React, { useState } from 'react';
import { getCurrentUserEmail } from '../Header/AuthContext.jsx';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        if (data === 'User authenticated') {
          alert('Login successful');
          setCurrentUserEmail(email); // Сохранение email текущего пользователя
          onLogin(email); // Передаем email в родительский компонент
        }
        else {
          alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login failed');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
