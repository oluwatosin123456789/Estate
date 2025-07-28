import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Cities from './components/Cities';
import CallToAction from './components/CallToAction';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import PropertyDetailsPage from './components/propertyDetails';
import FeaturedProperties from './components/FeaturedProperties';
import Reviews from './components/Reviews'
import Testimony from './components/Testimony';

import './App.css';




const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Cities />
    <CallToAction /> 
    <WhyWorkWithUs />
    <FeaturedProperties />
    <Reviews />
    <Testimony />
    
  </>
);

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/property-details" element={<PropertyDetailsPage />} />
          <Route path="Header" element={<Header />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;