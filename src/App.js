import React from "react";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Advantages />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
