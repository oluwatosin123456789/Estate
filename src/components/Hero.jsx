import React from 'react';

import buildingImage from '../asset/image/building.jpg'; 

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${buildingImage})` }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 

    
      <div className="relative z-10 flex flex-col h-full text-white p-4">


    
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <h1 className="text-5xl font-bold mt-10">Find Premium Homes</h1>
          <p className="text-xl mt-4">A new way to find your perfect home.</p>


          <div className="flex w-full max-w-md mt-8">
            <input
              type="text"
              placeholder="Enter location or property type"
              className="p-3 rounded-l-md w-full text-gray-800"
            />
            <button className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600 transition-colors">
              Search
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;