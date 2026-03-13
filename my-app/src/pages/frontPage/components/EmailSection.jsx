import { TbMail } from "react-icons/tb";

const EmailSection = () => {
  return (
    <>
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-65 w-[70%] flex  justify-center items-center relative">
        <img
          src="/images/arrowicon.png"
          alt=""
          className="absolute -top-6 -right-6"
        />
        <div className="h-[70%] w-[60%] flex flex-col justify-center items-center  gap-13">
          <h1 className=" w-full text-xl font-bold text-gray text-center">
            Subscribe to get information, latest news and other interesting
            offers about our Services
          </h1>
          <div className="w-full flex flex-row justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Your email"
              className="bg-white h-9 w-[60%] rounded-md p-2  relative"
            />

            <button className=" text-white hover:text-lightBlack rounded-md  cursor-pointer p-1 h-9 bg-darkBlue   shadow-lg hover:bg-tabBlue w-25 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSection;
