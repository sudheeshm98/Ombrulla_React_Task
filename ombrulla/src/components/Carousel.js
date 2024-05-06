import React, { useState, useEffect } from 'react';

const images = ["/img1.jpg", "/img2.jpg", "/img3.png"];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Slide ${index}`}
             className={`w-full object-cover transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
             style={{ height: '300px' }} />
      ))}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button onClick={() => setCurrent(current - 1 < 0 ? images.length - 1 : current - 1)}>Prev</button>
        <button onClick={() => setCurrent((current + 1) % images.length)}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
