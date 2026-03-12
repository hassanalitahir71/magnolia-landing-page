import { FaLocationArrow } from "react-icons/fa";

const DestinatioSection = () => {
  const destination_list = [
    {
      id: "1",
      destination: "Rome, Italty",
      img: "/images/1pic.png",
      amount: "$5,42k",
      daystrip: "10 Days Trip",
    },
    {
      id: "2",
      destination: "London, UK",
      img: "/images/2pic.jpg",
      amount: "$4,82k",
      daystrip: "12 Days Trip",
    },
    {
      id: "3",
      destination: "Full Europe",
      img: "/images/3pic.png",
      amount: "$15,5k",
      daystrip: "28 Days Trip",
    },
  ];
  return (
    <>
     <h1 className="text-4xl font-bold text-darkBlue flex justify-center mt-25">
       Top Destinations
      </h1>
    <div className=" h-100 w-full  flex gap-10 mt-10 justify-center">
      {destination_list.map((items) => (
        <div key={items.id} className=" h-full  w-65">
          <img className="h-[70%] w-full rounded-t-xl" src={items.img} alt="" />
          <div className="h-[30%] flex flex-col  bg-white p-5 rounded-b-xl gap-3">
            <div className="flex  flex-col gap-1 ">
            <h1 className="text-xl font-semibold">{items.destination}</h1>
            <div className="flex flex-row">
              <FaLocationArrow />
              <p className="text-sm text-[#84829a]">{items.daystrip}</p>
            </div>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-lg font-semibold">{items.amount}</h1>
              <button className=" text-white hover:text-lightBlack rounded-full cursor-pointer p-1 bg-darkBlue   shadow-lg hover:bg-tabBlue w-25 ">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    </>
  );
};

export default DestinatioSection;
