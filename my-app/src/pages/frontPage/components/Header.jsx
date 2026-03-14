import React, { useState } from "react";
import logopic from "/images/Company logo.png";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <header className="h-10  w-[90%] flex flex-row justify-between">
      <img className="h-[40px] w-auto" src={logopic} alt="logo" />
      <nav className="hidden md:flex gap-10 items-center text-base font-normal">
        <a href="#" className="hover:underline hover:font-medium">
          Home
        </a>
        <a href="#" className="hover:underline hover:font-medium">
          About
        </a>
        <a href="#" className="hover:underline hover:font-medium">
          Services
        </a>
        <a href="#" className="hover:underline hover:font-medium">
          Packages
        </a>
        <a href="#" className="hover:underline hover:font-medium">
          Community
        </a>
      </nav>
      <div className=" hidden  md:flex gap-2  txt-base font-normal items-center justify-center">
        <button className="h-9 w-26 text-white hover:text-lightBlack rounded-lg cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-transparent">
          Sign Up
        </button>
        <button className="h-9 w-26  text-white hover:text-lightBlack rounded-lg cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-transparent">
          Sign In
        </button>
      </div>
      <MdMenu className="md:hidden" onClick={() => setmenuOpen(!menuOpen)} />
      {menuOpen && (
        <div className=" absolute flex flex-col gap-2 right-4 top-11 bg-white p-3 rounded-2xl items-center text-base font-normal">
          <a href="#" className="font-semibold">
            Home
          </a>
          <a href="#" className="font-semibold">
            About
          </a>
          <a href="#" className="font-semibold">
            Services
          </a>
          <a href="#" className=" font-semibold">
            Packages
          </a>
          <a href="#" className="font-semibold">
            Community
          </a>

          <div className=" flex gap-3  txt-base font-normal items-center justify-center">
            <button className="h-9 w-26 text-white p-1  rounded-lg bg-darkBlue  shadow-lg ">
              Sign Up
            </button>
            <button className="h-9 w-26  text-white rounded-lg p-1 bg-darkBlue   shadow-lg ">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
