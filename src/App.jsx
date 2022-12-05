import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import About from './pages/about/About'
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
