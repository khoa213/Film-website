import "./App.css";
import MainLayout from "./layouts";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Rating from "pages/Rating/Rating";
import Comment from "pages/Comment/Comment";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import Users from "pages/Users";
import Pricing from "pages/Pricing";
import Movies from "pages/Movies";
import Genres, { AddGenre } from "pages/Genres";
// import Users from "pages/Users";

// import { UserProvider } from "../src/context/UserContext";

function App() {
  return (
    <React.StrictMode>
      {/* <UserProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="rating" element={<Rating />} />
            <Route path="comment" element={<Comment />} />
            <Route path="package" element={<Pricing />} />

            <Route path="/user" element={<Users />}></Route>
            <Route path="/movie/list-movies" element={<Movies />}></Route>
            <Route path="/genre/list-genres" element={<Genres />}></Route>
            <Route path="/genre/add-genre" element={<AddGenre />}></Route>

            {/* <Route path="tables" element={<Tables />} />
              <Route path="billing" />

              <Route path="/inventory" element={<Dashboard />}></Route>
              <Route path="/orders" element={<Dashboard />}></Route>

              <Route path="/users/add" element={<AddUser />}></Route>
              <Route path="/users/update/:id" element={<UpdateUser />} />
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/add" element={<AddProduct />}></Route> */}

            <Route path="profile" />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </UserProvider> */}
    </React.StrictMode>
  );
}

export default App;
