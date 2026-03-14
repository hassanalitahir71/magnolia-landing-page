import React from "react";
import contentpic from "/images/content.png";
import { FiMapPin, FiHome } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[55%] flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Visit the Most <span className="text-darkBlue">Beautiful Places</span>{" "}
          in the World
        </h1>
        
        <p className="text-lightBlack max-w-md">
          Pack your luggage and pick your destination, we will provide you the
          flight ticket, hotel booking and best guides
        </p>

        {/* SEARCH BOX */}
        <section className="flex flex-col md:flex-row md:items-center gap-7 bg-white p-6 md:rounded-full rounded-2xl shadow-md w-full">
          {/* Location */}
          <div className="flex flex-col md:border-r md:pr-3">
            <h4 className="text-gray text-sm">Location</h4>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-darkBlue" />
              <h4>Choose Location</h4>
        <section className="flex flex-row w-[100%] h-24 py-6 px-8 bg-white rounded-full">
          <div className="flex flex-row justify-center items-center border-r border-gray  gap-9">
            <div className="flex flex-col justify-center ">
              <h4 className="text-gray">Location</h4>
              <div className="flex flex-row justify-center items-center gap-1">
                <FiMapPin className="text-darkBlue" />
                <h4>Choose Location</h4>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col md:border-r md:pr-5">
            <h4 className="text-gray text-sm">Duration</h4>
            <div className="flex items-center gap-2">
              <FiHome className="text-darkBlue" />
              <h4>5 Days</h4>
              <FaChevronDown />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col md:px-2">
            <h4 className="text-gray text-sm">Date</h4>
            <div className="flex items-center gap-2">
              <SlCalender className="text-darkBlue" />
              <h4>17 July 2021</h4>
              <FaChevronDown />
            </div>
          </div>

          {/* Button */}
          <button className="bg-darkBlue text-white px-6 py-3 rounded-full hover:bg-tabBlue transition">
            Search
          </button>
        </section>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <img
          className="w-full max-w-md lg:max-w-full"
          src={contentpic}
          alt="travel"
        />
      </div>
    </div>
  );
};

export default Herosection;
