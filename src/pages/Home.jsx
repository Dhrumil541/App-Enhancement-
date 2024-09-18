import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-green-200 via-blue-300 to-purple-400">
      <div className="text-center p-10 bg-white bg-opacity-90 rounded-lg shadow-xl">
        {/* main Title */}
        <h1 className="text-6xl sm:text-5xl md:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Welcome to Task Manager
        </h1>
        
        {/* Button Section */}
        <div className="mt-8 space-x-4">

          {/* Login Button */}
       <Link to="/login">
         <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-indigo-500 hover:to-blue-500 hover:scale-105 hover:shadow-2xl">
            Login
              </button>
          </Link>

          {/* Register Button */}
          <Link to="/register">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-teal-500 hover:to-green-400 hover:scale-105 hover:shadow-2xl">
           Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
