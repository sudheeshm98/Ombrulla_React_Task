import React from 'react';

function Banner() {
  return (
    <div 
      className="text-white text-center flex flex-col justify-center items-center h-screen px-4 sm:px-12 py-6 sm:py-12"
      style={{
        backgroundImage: 'url("/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
        Welcome to Coding World!
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl">
       Make it work , Make it right & Make it fast
      </p>
    </div>
  );
}

export default Banner;
