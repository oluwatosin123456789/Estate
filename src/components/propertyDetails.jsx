import React from 'react';
import { useParams } from 'react-router-dom'; 
import buildingImage from '../asset/image/building.jpg'; 

const PropertyDetailsPage = () => {
 

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button (Optional) */}
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-6"
        >
          &larr; Back to Properties
        </button>

        {/* Property Image Gallery/Main Image */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={buildingImage} // Replace with actual property image later
            alt="Property Main"
            className="w-full h-96 object-cover"
          />
          {/* Could add a gallery here with smaller images below */}
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-lg shadow-lg">
          {/* Left Column: Title, Price, Location, Features */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Luxury Apartment in Ikeja</h1>
            <p className="text-2xl text-green-600 font-semibold mb-4">$500,000</p>
            <p className="text-gray-600 mb-6">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street, Ikeja, Lagos
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
              <p><span className="font-semibold">Beds:</span> 3</p>
              <p><span className="font-semibold">Baths:</span> 2</p>
              <p><span className="font-semibold">Area:</span> 1500 sqft</p>
              <p><span className="font-semibold">Type:</span> Apartment</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              This stunning 3-bedroom, 2-bathroom apartment offers luxurious living in the heart of Ikeja. Enjoy spacious rooms, modern finishes, and breathtaking city views. Perfect for families or professionals seeking comfort and convenience. Close to top amenities, schools, and transportation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Right Column: Agent Contact Info */}
          <div className="md:col-span-1 bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Agent</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60" // Placeholder for agent image
                alt="Agent"
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-gray-600">Real Estate Agent</p>
              </div>
            </div>
            <p className="text-gray-700 mb-2"><i className="fas fa-phone-alt mr-2"></i> +123 456 7890</p>
            <p className="text-gray-700 mb-4"><i className="fas fa-envelope mr-2"></i> john.doe@estate.com</p>
            <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors">
              Schedule a Tour
            </button>
          </div>
        </div>

        {/* Placeholder for Map or other sections */}
        {/* <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location Map</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default PropertyDetailsPage;