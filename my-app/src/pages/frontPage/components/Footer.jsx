import { BsTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationPin } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#FDFDFD] h-80 w-full flex justify-center shadow-[0_-10px_20px_rgba(0,0,0,0.2)] items-center">
      <div className="h-full w-[65%] p-4 flex flex-row justify-center items-start gap-8">
        <div className=" flex flex-col justify-between h-full">
          <img
            src="/images/Company logo.png"
            alt="Company Logo"
            className="h-[43px] w-[167px] mt-4"
          />
          <div className=" flex flex-col gap-2 justify-center">
            <h1 className="text-xl font-semibold flex justify-center">
              Social media
            </h1>
            <div className=" flex flex-row gap-2 justify-center ">
              <RiFacebookFill className=" cursor-pointer" />
              <FaTwitter className=" cursor-pointer" />
              <FaLinkedinIn className=" cursor-pointer" />
              <FaInstagram className=" cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="">
          <table className="table-auto border-separate border-spacing-3 text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 hover:underline cursor-pointer ">
                  Pages
                </th>
                <th className="px-4 py-2 hover:underline cursor-pointer ">
                  Services
                </th>
                <th className="px-4 py-2 hover:underline cursor-pointer">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Home it work
                </td>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Airlinefees
                </td>
                <td className="px-4 py-2 flex items-center gap-2 hover:underline cursor-pointer">
                  <BsTelephoneFill className="text-sm" />
                  <span>(406) 555-0120</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Pricing
                </td>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Airline
                </td>
                <td className="px-4 py-2 flex items-center gap-2 hover:underline cursor-pointer">
                  <MdMail className="text-xl" />
                  <span>magnoliatravels@gmail.com</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Services
                </td>
                <td className="px-4 py-2 hover:underline cursor-pointer">
                  Low fare tips
                </td>
                <td className="px-4 py-2 flex items-center gap-2 hover:underline cursor-pointer">
                  <MdLocationPin className="text-xl" />
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className=" flex flex-row justify-center gap-10 items-center">
            <h3 className="">Download the app by clicking the link below :</h3>
            <div className=" flex flex-row justify-between items-center w-[30%] gap-4 ">
              <div className=" ">
                <img
                  src="/images/button1-bg.png"
                  alt=""
                  className="h-10 cursor-pointer"
                />
              </div>
              <div className="">
                <img
                  src="/images/button2-bg.png"
                  alt=""
                  className="h-8 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
