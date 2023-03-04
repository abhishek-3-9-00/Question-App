import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Header = () => {
  
    const [nav, setNav] = useState(false);
    const links = [
      {
        id: 1,
        link: "Home",
        to:'main'
      },
      {
        id: 2,
        link: "about",
        to:'coming'
      },
      {
        id: 3,
        link: "Quiz",
        to:'main'
      },
      {
        id: 4,
        link: "contact",
        to:'coming'
      },
      
    ];
    return (
      <div className="flex justify-between items-center w-full h-20 text-white fixed bg-gray-800 px-4">
        <div className="text-6xl font-signature ml-2">
          <h1>Questions <span className="font-navigation text-4xl">APP</span></h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link,to }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-navigation font-bold text-gray-400 capitalize hover:scale-110 duration-200"
            >
              <Link to={to} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link,to }) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-gray-500 capitalize py-6 text-4xl"
            >
              <Link onClick={()=>{setNav(false)}} to={to} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        )}
      </div>
    );
  };
  


export default Header
