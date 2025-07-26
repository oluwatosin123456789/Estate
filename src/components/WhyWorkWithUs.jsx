import React from 'react';
import { FaHandshake, FaListAlt, FaCogs } from 'react-icons/fa';

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 bg-green"> 
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-[150px]">
          Why you should work with us
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          
          <div className="p-8 rounded-lg shadow-lg hover:shadow-xl  shadow-emerald-100 transition-shadow duration-300">
            <div className="text-green-500 text-5xl mb-4">
              <i className="fas fa-handshake"></i> 
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Our experienced agents provide personalized advice every step of the way, ensuring informed decisions.
            </p>
          </div>

          
          <div className="p-8 rounded-lg shadow-lg hover:shadow-xl  shadow-emerald-100 transition-shadow duration-300">
            <div className="text-green-500 text-5xl mb-4">
              <FaListAlt />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Extensive Listings</h3>
            <p className="text-gray-600">
              Access a vast portfolio of properties, from cozy apartments to luxurious estates, across prime locations.
            </p>
          </div>

          
          <div className="p-8 rounded-lg shadow-lg hover:shadow-xl  shadow-emerald-100 transition-shadow duration-300">
            <div className="text-green-500 text-5xl mb-4">
              <FaCogs />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Seamless Process</h3>
            <p className="text-gray-600">
              We streamline your buying or selling journey with efficient processes and transparent communication.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;