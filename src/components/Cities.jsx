import React from 'react';

// import newYorkImage from '../asset/image/new-york.jpg';
// import chicagoImage from '../asset/image/chicago.jpg';
import buildingImage from '../asset/image/building.jpg'; 

const Cities = () => { 
  return (
    <section id="properties-by-city" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Find Properties in These Cities
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* My 5 Grid for cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="New York City"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">New York</h3>
              <p className="text-white text-sm mt-1">8 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="Chicago City"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Chicago</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="Los Angeles City"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Los Angeles</h3>
              <p className="text-white text-sm mt-1">1 Property</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="Miami City"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Miami</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage}
              alt="Florida State"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Florida</h3>
              <p className="text-white text-sm mt-1">1 Property</p>
            </div>
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default Cities;