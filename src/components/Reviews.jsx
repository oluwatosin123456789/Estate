import React from 'react';
import buildingImage from '../asset/image/building.jpg'; 

const RealEstateShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              We Use Real Estate to Show Our Appreciation of The World
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every brick, every beam, every landscape we touch is a testament to our profound respect for the world around us.
               We believe real estate is more than just property; it's a canvas for life, built with intention and gratitude.
            </p>
          </div>

          
          <div className="grid grid-cols-2 gap-8">
            
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$18M</div>
              <div className="text-sm text-gray-600">
                Owned From Properties
                <br />
                Transactions
              </div>
            </div>

            
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15K+</div>
              <div className="text-sm text-gray-600">
                Properties For
                <br />
                Rent
              </div>
            </div>

            
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">26K+</div>
              <div className="text-sm text-gray-600">
                Properties For
                <br />
                Buy
              </div>
            </div>

            
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">890</div>
              <div className="text-sm text-gray-600">
                Daily Completed
                <br />
                Transactions
              </div>
            </div>
          </div>

          
          <div>
            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={buildingImage}
              alt="Modern house with green lawn and trees"
              className="w-full h-80 object-cover"
            />
          </div>
          
          
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-200 rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateShowcase;