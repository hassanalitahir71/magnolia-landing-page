import React from "react";

const OurServices = () => {
  const servicelist = [
    {
      id: "1",
      name: "Calculated Weather ",
      img: "/images/Group 48.png",
      text: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      id: "2",
      name: "Best Flights",
      img: "/images/Group 51.png",
      text: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      id: "3",
      name: "Local Events",
      img: "/images/Group 48.png",
      text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      id: "4",
      name: "customization",
      img: "/images/Group 49.png",
      text: " We deliver outsourced aviation services for military customers",
    },
  ];
  return (
    <div className="">
      <h1>Our Services</h1>
      <div h-111 w-94>
        {servicelist.map((items) => (
          <div className=" h-100% w-24 flex flex-col justify-center items-center bg-amber-500" key={items.id}>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
