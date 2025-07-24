/*import React from 'react';
import Header from './components/Header';
import FeaturedProperties from './components/FeaturedProperties';
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs';
import PropertyDetails from './components/propertyDetails';

const Main = () => {
  return (
    <div className="App">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      
    </div>
  );
};

export default Main; */


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


import Header from './components/Header'; 
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import WhyWorkWithUs from './components/WhyChooseUs';
import PropertyDetails from './components/propertyDetails';
import './App.css'; 


const HomePage = () => (
  <>
   
    <Header /> 
    <Hero />
    <FeaturedProperties />
   
    <WhyWorkWithUs />
   
  </>
);

function App() {
  return (
    <BrowserRouter> {/* This wraps your entire application for routing */}
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          
          


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;