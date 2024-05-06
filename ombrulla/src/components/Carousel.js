import React, { useState, useEffect } from 'react';

const images = ["/img1.jpg", "/img2.jpg", "/img3.png"];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full" style={{ height: '300px' }}>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`}
               className="w-full object-cover flex-shrink-0"
               style={{ height: '300px', width: '100%' }} />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button onClick={() => setCurrent(current - 1 < 0 ? images.length - 1 : current - 1)} className="bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-opacity">
          Prev
        </button>
        <button onClick={() => setCurrent((current + 1) % images.length)} className="bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-opacity">
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
