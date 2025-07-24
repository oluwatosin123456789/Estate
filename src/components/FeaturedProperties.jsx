import React from 'react';
import deskImage from '../asset/image/building.jpg'; // Ensure this path is correct for your image

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Find Properties in your 
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Ikeja</h3>
              <p className="text-white text-sm mt-1">Awesome Location, 3 Bed, 2 Bath</p>
            </div>
          </a>

          {/* Property Card 2 */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Lagos Island</h3>
              <p className="text-white text-sm mt-1">Prime Location, 4 Bed, 3 Bath</p>
            </div>
          </a>

          {/* Property Card 3 */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Victoria Island</h3>
              <p className="text-white text-sm mt-1">Luxury Living, 5 Bed, 4 Bath</p>
            </div>
          </a>

          {/* Property Card 4 */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Lekki Phase 1</h3>
              <p className="text-white text-sm mt-1">Modern Design, 3 Bed, 3 Bath</p>
            </div>
          </a>

           <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Ikeja</h3>
              <p className="text-white text-sm mt-1">Awesome Location, 3 Bed, 2 Bath</p>
            </div>
          </a>


           <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={deskImage}
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">Ikeja</h3>
              <p className="text-white text-sm mt-1">Awesome Location, 3 Bed, 2 Bath</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;