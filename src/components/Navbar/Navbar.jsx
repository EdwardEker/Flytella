import React, { useState } from "react";
/* import Logo from "../../assets/LogoFlyt.svg"; */
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import "./NavbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <img src={Logo} alt="" className="logo-img" /> */}
          <BsBoxSeam className="icon" />
          <h1 className="">Flyttela</h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>Hem</li>
          <li>Här finns vi</li>
          <li>Tjänster</li>
          <li>Om oss</li>
          <li>Blog</li>
          <button>Offert</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
