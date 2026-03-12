import React from "react";

const OurServices = () => {
  const servicelist = [
    {
      id: "1",
      name: "Calculated Weather",
      img: "/images/Group 48.png",
      text: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      id: "2",
      name: "Best Flights",
      img: "/images/Group 49.png",
      text: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      id: "3",
      name: "Local Events",
      img: "/images/Group 48.png",
      text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      id: "4",
      name: "Customization",
      img: "/images/Group 49.png",
      text: "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div className="mt-30">
      <h1 className="text-4xl font-bold text-darkBlue flex justify-center">
        Our Services
      </h1>

      <div className="mt-18 gap-10 flex justify-center">
        {servicelist.map((items) => (
          <div key={items.id} className="relative group w-65">
            {/* Blue Shape */}
            <div
              className="absolute bottom-5 -left-6 h-24 w-24 bg-blue-600 
            rounded-tl-3xl rounded-br-3xl opacity-0 
            group-hover:opacity-100 transition-all duration-300"
            ></div>

            {/* Card */}
            <div
              className="relative z-10 flex flex-col items-center text-center gap-4 p-8 
            rounded-[40px] bg-backColor
            transition-all duration-300 
            group-hover:bg-white 
            group-hover:shadow-2xl 
            group-hover:-translate-y-5"
            >
              <img className="h-16" src={items.img} alt={items.name} />

              <h1 className="text-xl font-bold text-darkBlue">{items.name}</h1>

              <p className="text-sm text-center text-gray-500">{items.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
