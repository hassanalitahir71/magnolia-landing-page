import Slider from "react-slick";

const TestimonialsSection = () => {
  const TestimonialList = [
    {
      id: "1",
      destination: "United States",
      dp: "/images/dp1.png",
      name: "Sarah Mathew ",
      rating: "4",
      color: "#FFCC00",
      title: "A Journey of a Lifetime!",
      content:
        "I’ ve traveled to Dubai several times, but this was the first time I booked with Magnolia Travel Company. Their attention to detail and commitment to customer satisfaction made this trip the easiest and most enjoyable one yet. The vehicles were pristine, and the flexibility of the itinerary allowed us to explore at our own pace. A true gem for anyone visiting Dubai!",
    },
    {
      id: "2",
      destination: "New York",
      dp: "/images/dp2.png",
      name: "Olivia Tymon ",
      rating: "3",
      color: "#E79BE2",
      title: "Efficient and Reliable!",
      content:
        "I had the pleasure of using Magnolia Travel Company for a week-long tour across Dubai, and it exceeded every expectation. The team was professional, the car was comfortable, and the itineraries were perfectly planned. I felt like a VIP throughout the entire trip. Highly recommend it to anyone looking for a seamless and unforgettable travel experience!",
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
        "We recently used Magnolia Travel Company for a family vacation, and it was the best decision we made. From the moment we booked, the service was exceptional. The driver was knowledgeable and friendly, making the journey as enjoyable as the destinations. The personalized touch made the experience truly special. Can't wait to travel with them again!",
    },
    {
      id: "2",
      destination: "New York",
      dp: "/images/dp1.png",
      name: "Olivia Tymon ",
      rating: "3",
      color: "#FFCC00",
      title: "Efficient and Reliable!",
      content:
        "I had the pleasure of using Magnolia Travel Company for a week-long tour across Dubai, and it exceeded every expectation. The team was professional, the car was comfortable, and the itineraries were perfectly planned. I felt like a VIP throughout the entire trip. Highly recommend it to anyone looking for a seamless and unforgettable travel experience!",
    },
    {
      id: "1",
      destination: "United States",
      dp: "/images/dp3.png",
      name: "Sarah Mathew ",
      rating: "4",
      color: "#FFCC00",
      title: "A Journey of a Lifetime!",
      content:
        "I’ ve traveled to Dubai several times, but this was the first time I booked with Magnolia Travel Company. Their attention to detail and commitment to customer satisfaction made this trip the easiest and most enjoyable one yet. The vehicles were pristine, and the flexibility of the itinerary allowed us to explore at our own pace. A true gem for anyone visiting Dubai!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-darkBlue flex justify-center mt-25">
        Testimonials
      </h1>

      <div className="w-[90%] h-90 mx-auto py-5">
        <Slider {...settings}>
          {TestimonialList.map((items) => (
            <div key={items.id} className="px-4">
              <div className="bg-white  rounded-xl hover:shadow-lg  p-6 h-[80%] flex flex-col gap-4">
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
                    <h1 className="font-semibold text-md">{items.name}</h1>
                    <p className="text-gray-500 text-xs">{items.destination}</p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-bold text-sm">{items.title}</h2>

                {/* Content */}
                <p className="text-gray text-xs">{items.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialsSection;
