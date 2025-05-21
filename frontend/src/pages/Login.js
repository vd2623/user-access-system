import React, { useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ username: data.username, role: data.role }));
      switch (data.role) {
        case 'Admin': navigate('/create-software'); break;
        case 'Employee': navigate('/request-access'); break;
        case 'Manager': navigate('/pending-requests'); break;
        default: navigate('/login');
      }
    } catch {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
