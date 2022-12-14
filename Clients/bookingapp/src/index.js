import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateHotels } from "./context/Allapi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Room from "./components/Room";
import SearchHotel from "./components/SearchHotel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateHotels>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/SearchHotels" element={<SearchHotel />} />
      </Routes>
    </BrowserRouter>
  </StateHotels>
);
