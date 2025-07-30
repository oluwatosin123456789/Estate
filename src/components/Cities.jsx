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
          Find Peremium homes in this Cities 
        </p>

        {/* My 5 Grid for cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1691743441282-72dbe8f91dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFnb3MlMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D"
              alt="LAGOS"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">LAGOS</h3>
              <p className="text-white text-sm mt-1">8 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1721642472312-cd30e9bd7cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUJVSkF8ZW58MHx8MHx8fDA%3D"
              alt="ABUJA"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ABUJA</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1623854245266-ea837fd62674?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJJVkVSUyUyMFNUQVRFfGVufDB8fDB8fHww"
              alt="PORTHACORT"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">PORTHACORT</h3>
              <p className="text-white text-sm mt-1">1 Property</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853"
              alt="ENUGUN"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">ENUGUN</h3>
              <p className="text-white text-sm mt-1">2 Properties</p>
            </div>
          </a>

          
          <a href="#" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src="https://media.istockphoto.com/id/2131410984/photo/view-of-ibadan-city-from-oke-are.webp?a=1&b=1&s=612x612&w=0&k=20&c=K-zBtzbmY4tQjmNIPTnb_8I-z43t_ZyS-JOZLXviTCY="
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