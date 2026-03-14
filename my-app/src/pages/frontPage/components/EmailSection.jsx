import { TbMail } from "react-icons/tb";

const EmailSection = () => {
  return (
    <div className="w-full flex justify-center px-6 mt-20">
      <div
        className="bg-[url('/images/bg.png')] bg-center bg-cover 
      rounded-xl rounded-tl-[70px] 
      w-full max-w-4xl 
      py-12 px-6 md:px-12 
      flex justify-center items-center relative"
      >
        {/* Arrow Icon */}
        <img
          src="/images/arrowicon.png"
          alt=""
          className="absolute -top-6 -right-6 w-12 md:w-16"
        />

        <div className="w-full max-w-2xl flex flex-col items-center gap-8">
          {/* Text */}
          <h1 className="text-lg md:text-xl font-bold text-gray text-center">
            Subscribe to get information, latest news and other interesting
            offers about our Services
          </h1>

          {/* Input + Button */}
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <div className="flex items-center bg-white rounded-md px-3 w-full h-10">
              <TbMail className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your email"
                className="outline-none w-full"
              />
            </div>

            <button className="bg-darkBlue text-white px-6 h-10 rounded-md hover:bg-tabBlue transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
