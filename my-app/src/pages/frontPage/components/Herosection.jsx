import React from "react";
import contentpic from "/images/content.png";
import { FiMapPin } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const Herosection = () => {
  return (
    <div className="h-105 w-[95%] gap-11  flex flex-row">
      <div className="h-full w-[60%] flex flex-col ">
        <div className=" flex flex-col gap-5">
          <h1 className="text-5xl mt-11 ml-20 w-120 font-bold">
            Visit the Most{" "}
            <span className="text-darkBlue">Beautiful Places</span> in the World
          </h1>
          <text className="h-27 w-86  ml-20 text-lightBlack">
            Pack your luggage and pick your destination, we will provide you the
            flight ticket, hotel booking and best guides
          </text>
        </div>
        <section className="flex flex-row w-[100%] h-24 py-6 px-8 bg-white rounded-full">
          <div className="flex flex-row justify-center items-center border-r border-gray  gap-11">
            <div className="flex flex-col justify-center ">
              <h4 className="text-gray">Location</h4>
              <div className="flex flex-row justify-center items-center gap-1">
                <FiMapPin className="text-darkBlue" />
                <h4>Choose Location</h4>
              </div>
            </div>
            <div>
              <h4 className="text-gray">Duration</h4>

              <div className="flex flex-row justify-center items-center gap-1">
                <FiHome className="text-darkBlue" />
                <div className="flex flex-row justify-center items-center mr-5 gap-17">
                  <h4>5 Days</h4>
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex  flex-row ml-5 gap-4">
            <div className="flex flex-col">
              <h4 className="text-gray">Date</h4>

              <div className="flex flex-row justify-center items-center gap-1">
                <SlCalender className="text-darkBlue" />
                <div className="flex flex-row justify-center items-center mr-5 gap-6">
                  <h4>17 July 2021</h4>
                  <FaChevronDown />
                </div>
              </div>
            </div>{" "}
            <button className=" text-white hover:text-lightBlack rounded-full cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-tabBlue w-25 ">
              Search
            </button>
          </div>
        </section>
      </div>

      <img className="h-full w-[30%%]" src={contentpic} alt="" />
    </div>
  );
};

export default Herosection;
