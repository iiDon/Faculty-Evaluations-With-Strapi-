import React from "react";
import { useState } from "react";

const Header = () => {
  const [items, setItems] = useState([
    "المقررات",
    "الدكاترة",
    "إضافة مقرر",
    "إضافة دكتور",
  ]);

  return (
    <nav className="p-5 bg-white shadow ">
      <div className="md:flex md:items-center md:justify-between items-center">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img className="h-10 inline " src="" alt="Logo" />
          </span>
          <span className="text-3xl cursor-pointer md:hidden block">Menu</span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full right-0 md:w-auto md:py-0-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-400">
          {items.map((item) => (
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="text-xl hover:text-cyan-500 duration-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
