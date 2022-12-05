import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logoFlytt.png";
import Links from "../../mocks/Links";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Logotype Flyttela" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {Links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <AiOutlineClose /> : <AiOutlineBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
