import React from "react";
import { useState } from "react";
import { TiTimes, TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-4 text-white">
      <h1 className="w-full font-bold text-3xl text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <TiTimes size={22} /> : <TiThMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-2/3 h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 md:hidden"
            : "fixed -left-full top-0 h-full w-2/3 ease-in-out duration-500 "
        }
      >
        <h1 className="w-full m-4 font-bold text-3xl text-[#00df9a]">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
