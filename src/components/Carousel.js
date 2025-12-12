import React, { useState, useEffect, useCallback } from "react";

const Carousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const slide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slide);
  }, [nextSlide, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 flex-nowrap"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0" style={{ width: "100%" }}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-85 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-[45%] left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
      >
        Prev
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-[45%] right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
