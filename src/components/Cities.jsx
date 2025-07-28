// src/components/Cities.jsx
import React from 'react';
import buildingImage from '../asset/image/building.jpg'; 

const Cities = () => { 
  return (
    <section id="properties-by-city" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Find Properties in These Cities
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Find Peremium homes in this Cities {/* Note: "Peremium" should be "Premium" */}
        </p>

        {/* My 5 Grid for cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* LAGOS Card */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="LAGOS"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">LAGOS</h3>
              <p className="text-white text-sm mt-1">8 Properties</p>
            </div>
          </a>

          {/* ABUJA Card */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="ABUJA"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ABUJA</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          {/* PORTHACORT Card */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="PORTHACORT"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">PORTHACORT</h3>
              <p className="text-white text-sm mt-1">1 Property</p>
            </div>
          </a>

          {/* ENUGUN Card */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage} 
              alt="ENUGUN"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ENUGUN</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          {/* IBADAN Card */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={buildingImage}
              alt="IBADAN"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">IBADAN</h3>
              <p className="text-white text-sm mt-1">1 Property</p>
            </div>
          </a>
         
        </div> 

       

      </div> 
    </section>
  );
};

export default Cities;