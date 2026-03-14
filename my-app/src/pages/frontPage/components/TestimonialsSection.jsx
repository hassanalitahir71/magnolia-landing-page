import Slider from "react-slick";

const TestimonialsSection = () => {
  const TestimonialList = [
    {
      id: "1",
      destination: "United States",
      dp: "/images/dp1.png",
      name: "Sarah Mathew",
      rating: "4",
      color: "#FFCC00",
      title: "A Journey of a Lifetime!",
      content:
        "I’ve traveled to Dubai several times, but this was the first time I booked with Magnolia Travel Company. Their attention to detail made the trip easy and enjoyable.",
    },
    {
      id: "2",
      destination: "New York",
      dp: "/images/dp2.png",
      name: "Olivia Tymon",
      rating: "3",
      color: "#E79BE2",
      title: "Efficient and Reliable!",
      content:
        "The team was professional, the car was comfortable, and the itineraries were perfectly planned. Highly recommend!",
    },
    {
      id: "3",
      destination: "Pakistan",
      dp: "/images/dp3.png",
      name: "Ahmed Rehman",
      rating: "4",
      color: "#7BC1E7",
      title: "Perfect for Our Family Vacation!",
      content:
        "The personalized touch made the experience special. The driver was knowledgeable and friendly.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-darkBlue text-center mt-20">
        Testimonials
      </h1>

      <div className="w-[90%] mx-auto py-10">
        <Slider {...settings}>
          {TestimonialList.map((items) => (
            <div key={items.id} className="px-3">
              <div className="bg-white rounded-xl hover:shadow-lg p-6 flex flex-col gap-4 min-h-[220px]">
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-full h-10 w-10 flex justify-center items-end overflow-hidden"
                    style={{ backgroundColor: items.color }}
                  >
                    <img
                      className="h-[90%] w-full object-cover"
                      src={items.dp}
                      alt=""
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-sm md:text-md">
                      {items.name}
                    </h1>
                    <p className="text-gray-500 text-xs">{items.destination}</p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-bold text-sm">{items.title}</h2>

                {/* Content */}
                <p className="text-gray text-xs md:text-sm leading-relaxed">
                  {items.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialsSection;
