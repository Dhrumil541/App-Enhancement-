import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handelNavigateUser = () => {
    navigate("/user-dashboard");
  }


  const handelNavigateAdmin = () => {
    navigate("/admin-dashboard");
  }


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      alert('Logged in successfully!');
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50">
     <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
            <label className="block text-gray-600">Username</label>
             <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
         <div className="mb-6">
          <label className="block text-gray-600">Password</label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          /*
          <button
            type="submit"
             onClick={handelNavigateAdmin}
            className="w-full py-3 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            AdminLogin
          </button>

          <button
            type="submit"
             onClick={handelNavigateUser}
            className="w-full py-3 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            UserLogin
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
