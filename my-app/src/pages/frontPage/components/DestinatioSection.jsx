import { FaLocationArrow } from "react-icons/fa";

const DestinatioSection = () => {
  const destination_list = [
    {
      id: "1",
      destination: "Rome, Italy",
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
    <div className="mt-20 px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-darkBlue text-center">
        Top Destinations
      </h1>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {destination_list.map((items) => (
          <div
            key={items.id}
            className="w-70  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              className="h-56 w-full object-cover"
              src={items.img}
              alt={items.destination}
            />

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-1">
              <h1 className="text-xl font-semibold">{items.destination}</h1>

              <div className="flex items-center gap-2 text-[#84829a] text-sm">
                <FaLocationArrow />
                <p>{items.daystrip}</p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <h1 className="text-lg font-semibold">{items.amount}</h1>

                <button className="bg-darkBlue text-white px-4 py-2 rounded-full hover:bg-tabBlue transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinatioSection;
