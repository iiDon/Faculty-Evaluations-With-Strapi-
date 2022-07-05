import React from "react";
import { useState } from "react";
import logo from "../Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  let Links = [
    { name: "المقررات", link: "" },
    { name: "الدكاترة", link: "" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 bg-blue-500">

        <div className="md:flex items-center justify-between bg-white- py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-cent font-main text-gray-800">
            <span className="text-3xl text-indigo-600 ml-1 pt-2">L</span>
            Logo
          </div>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute left-8 top-6 cursor-pointer md:hidden ">
            <span className="text-white">{open? 'close':'Menu'}</span>
          </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-blue-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pr-0 pr-9 transition-all duration-500 ease-in ${open? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <a href="" className="font-main text-blue-50 hover:text-blue-200 duration-500 ">{link.name}</a>
                </li>
              ))}
            </ul>
        </div>



    </div>
  );
};

export default Header;
