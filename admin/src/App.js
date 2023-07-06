import './App.css';
import MainLayout from './layouts';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Users, { AddUser, UpdateUser } from './pages/Users';
import { UserProvider } from '../src/context/UserContext';
function App() {
  return (
    <React.StrictMode>
      <UserProvider>


      <BrowserRouter>
        <Routes>
          {/* <Route path="/sign-up" />
          <Route path="/sign-in" /> */}
           <Route path="/" element={<Navigate to="/dashboard" />} /> 
          <Route path="/" element={<MainLayout />}>

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="billing" />
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="users/add" element={<AddUser />} />
            <Route path="users/update/:id" element={<UpdateUser />} /> */}
           
            <Route path="profile" />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </React.StrictMode>
  );
}

export default App;
