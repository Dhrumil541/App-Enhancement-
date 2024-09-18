import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home'; 
import Dashboard from './components/Dashboard';
// import UserDashboard from './components/Dashboard';
import AdminDashboard from './components/AdaminDashboard';
// import { TaskProvider } from './context/TaskContext'; 



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
