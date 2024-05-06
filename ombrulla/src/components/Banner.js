import React from 'react';

function Banner() {
  return (
    <div 
      className="text-white p-12 text-center flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage: 'url("/banner.jpg")', // Assumes image is in the public directory
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
        Welcome to Coding World
      </h1>
      <p className="mt-4 text-xl sm:text-2xl max-w-xl">
        Discover our services and offerings.
      </p>
    </div>
  );
}

export default Banner;
