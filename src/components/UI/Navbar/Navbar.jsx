import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../assets/LogoFlyttela.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-blue-600">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="">FLYTT</h1>
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Hem</li>
            <li>Här finns vi</li>
            <li>Tjänster</li>
            <li>Om oss</li>
            <li>Blogg</li>
            <button className="ml-4">Offert</button>
          </ul>
        </div>
        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-blue-600 text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Hem</li>
            <li className="text-2xl">Här finns vi</li>
            <li className="text-2xl">Tjänster</li>
            <li className="text-2xl">Om oss</li>
            <li className="text-2xl">Blogg</li>
            <button className="m-8">Offert</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
