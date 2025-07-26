// src/components/CallToAction.jsx
import React from 'react';
import deskImage from '../asset/image/desk.jpg'; // Make sure this image path is correct

const CallToAction = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${deskImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}

      <div className="relative z-10 container mx-auto px-4 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Looking for your dream home?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sign up for our email alerts to receive updates on new properties that match your criteria directly in your inbox.
        </p>

        {/* Email Subscription Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto flex-grow p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;