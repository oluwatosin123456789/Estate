import React, { useState } from 'react';

const Testimony = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Cameron Williamson",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores."
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      text: "The platform exceeded our expectations. The user interface is intuitive and the search functionality is incredibly powerful. It has transformed how we approach real estate investments."
    }
  ];

  const companies = [
    { name: "amazon", logo: "amazon" },
    { name: "AMD", logo: "AMD" },
    { name: "cisco", logo: "cisco" },
    { name: "dropcom", logo: "dropcom" },
    { name: "logitech", logo: "logitech" },
    { name: "Spotify", logo: "Spotify" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900 text-white">
      
      {/* Main Testimonial Section */}


      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          {/* Left Side - Stats and Title */}
          
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white leading-tight mb-4">
                What our customers are saying us?
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-300 mb-2">10m+</div>
                <div className="text-sm text-gray-300">
                  Happy People
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-orange-300 mb-2">4.88</div>
                <div className="text-sm text-gray-300">
                  Overall rating
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>



          {/* Right Side - Testimonial */}
         
         
         
          <div className="relative">
          
          
            {/* Quote Icon */}
          
          
          
            <div className="absolute -top-4 right-8">
              <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>

          
          
            {/* User Info */}
           
           
           
           
            <div className="flex items-center mb-6">
              <img 
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
           
           
            <p className="text-gray-300 leading-relaxed mb-8">
              {testimonials[currentTestimonial].text}
            </p>

            {/* Navigation Buttons */}
           
           
            <div className="flex space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Companies Section */}
     
     
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto p-8">
          <p className="text-center text-gray-400 mb-8">
            Thousands of world's leading companies trust Space
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;