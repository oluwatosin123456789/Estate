import React from 'react';

const Header = () => {
  return (
    <header className='p-4 bg-white flex justify-between items-center w-full'>
        <div>
            <h2 className="text-xl font-bold text-gray-800">
                Estate
            </h2>
        </div>
      

      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="p-2 text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#properties" className="p-2 text-gray-700 hover:text-gray-900">Properties</a></li>
          <li><a href="#" className="p-2 text-gray-700 hover:text-gray-900">Agents</a></li>
          <li><a href="#" className="p-2 text-gray-700 hover:text-gray-900">Blog</a></li>
        </ul>
      </nav>

      <button className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-colors">Contact Us</button>

    </header>
  );
};

export default Header;