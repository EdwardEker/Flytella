import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavbarMenu from "./components/navbarMenu/NavbarMenu";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import News from "./pages/news/News";
import Gallery from "./pages/gallery/Gallery";
import City from "./pages/city/City";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="city" element={<City />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
