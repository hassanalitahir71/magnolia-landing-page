import { BsTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationPin } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#FDFDFD] w-full shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/4">
          <img
            src="/images/Company logo.png"
            alt="Company Logo"
            className="h-[43px]"
          />

          <div className="flex flex-col items-center lg:items-start gap-2">
            <h1 className="text-lg font-semibold">Social media</h1>
            <div className="flex gap-3 text-lg">
              <RiFacebookFill className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col sm:flex-row justify-center  gap-10 lg:w-2/4 text-sm">
          {/* Pages */}
          <div className="flex flex-col gap-2"> 
            <h3 className="font-semibold text-base">Pages</h3>
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Pricing</p>
            <p className="hover:underline cursor-pointer">Services</p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Services</h3>
            <p className="hover:underline cursor-pointer">Airline Fees</p>
            <p className="hover:underline cursor-pointer">Airline</p>
            <p className="hover:underline cursor-pointer">Low Fare Tips</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3 lg:w-1/4 text-sm">
          <h3 className="font-semibold text-base">Contact</h3>

          <div className="flex items-center gap-2">
            <BsTelephoneFill />
            <span>(406) 555-0120</span>
          </div>

          <div className="flex items-center gap-2">
            <MdMail />
            <span className="break-all">magnoliatravels@gmail.com</span>
          </div>

          <div className="flex items-start gap-2">
            <MdLocationPin />
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
          </div>
        </div>
      </div>

      {/* App Download */}
      <div className="border-t py-6 px-5 flex flex-col md:flex-row justify-center items-center gap-5 text-center">
        <h3 className="text-sm">
          Download the app by clicking the link below :
        </h3>

        <div className="flex gap-4">
          <img
            src="/images/button1-bg.png"
            alt="App store"
            className="h-10 cursor-pointer"
          />
          <img
            src="/images/button2-bg.png"
            alt="Play store"
            className="h-9 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
