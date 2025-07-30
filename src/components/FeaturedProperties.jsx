import React from 'react';
import deskImage from '../asset/image/building.jpg'; 

const Cities = () => {
  return (
    <section id="properties" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Premium Homes
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://media.istockphoto.com/id/1346888281/photo/modern-living-room-in-scandinavian-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=s04meaKg5dmzFIBGzvH0GIjpUBSSIAuTyqKTvWycg_w="
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">LAGOS</h3>
              <p className="text-white text-sm mt-1">Nigeria’s commercial and lifestyle capital</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1723258341089-668715856b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxhJTIwZHVwbGV4JTIwNCUyMGJlZCUyMHJvb20lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ABUJA</h3>
              <p className="text-white text-sm mt-1">Power, prestige, and peaceful living.</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src=" https://plus.unsplash.com/premium_photo-1670357854650-ffe51af7c3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxhJTIwZHVwbGV4JTIwNCUyMGJlZCUyMHJvb20lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ENUGUN</h3>
              <p className="text-white text-sm mt-1"> Historic charm meets modern development</p>
            </div>
          </a>

          {/* Property Card 4 */}
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src=" https://images.unsplash.com/photo-1587136372225-82396eeb0d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxhJTIwZHVwbGV4JTIwNCUyMGJlZCUyMHJvb20lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">IBADAN</h3>
              <p className="text-white text-sm mt-1">Heritage city with growing potential.</p>
            </div>
          </a>

           <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://plus.unsplash.com/premium_photo-1723901831427-109ca9fa842b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxhJTIwZHVwbGV4JTIwNCUyMGJlZCUyMHJvb20lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">RIVERS</h3>
              <p className="text-white text-sm mt-1">Oil-rich land driving urban growth</p>
            </div>
          </a>


           <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src=" https://images.unsplash.com/photo-1643297550841-1386b3a10612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMGR1cGxleCUyMGluJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="property"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">OGUN</h3>
              <p className="text-white text-sm mt-1">Industrial rise fuels property boom.</p>
            </div>
          </a>


          
        <div className="mt-12 text-center"> 
          <a href="#" 
            className="inline-block bg-green-500 text-white px-8 py-2 rounded-lg text-wrap  hover:bg-black transition-colors align  shadow-md"
          >
            See All Listings →
          </a>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Cities;