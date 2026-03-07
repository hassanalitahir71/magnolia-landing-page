import React from "react";
import logopic from "/images/Company logo.png";

const Header = () => {
  return (
    <container className="h-10  w-[90%] flex flex-row justify-between">
      <img className="h-[43px] w-[167px]" src={logopic} alt="logo" />
      <nav className="flex gap-12 items-center text-base font-normal">
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
      <div className="flex gap-2  txt-base font-normal items-center justify-center">
        <button className="h-9 w-26 text-white hover:text-lightBlack rounded-lg cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-transparent">
          Sign Up
        </button>
        <button className="h-9 w-26  text-white hover:text-lightBlack rounded-lg cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-transparent">
          Sign In
        </button>
      </div>
    </container>
  );
};

export default Header;
