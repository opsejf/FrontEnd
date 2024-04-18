import React, { useState } from 'react';
// Run npm install react-router-dom if you have issues with npm start 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layoutComponent';
import './styles/layout.css';
// Import page components below
import PropertyForm from './components/propertyForm.js';
import SellerForm from './components/SellerForm.js';
import DisplaySelectedProperty from './components/DisplaySelectedProperty.js';
import Buyerform from './components/Buyerform';
import HomeSearch from './components/HomeSearch.js'
import DisplayProperties from './components/DisplayProperties';
import SignIn from './components/signIn.js';
import AboutUs from './components/aboutUs.js';


import DisplaySellers from './components/DisplaySellers.js'
import DisplayBuyers from './components/DisplayBuyers.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          {/* Base route for every page including the layout component template */}
          <Route path="/" element={<Layout/>}> 
            {/* Nested paths for each page component (E.g. Buyer / Seller pages) */}
            <Route
            path="home"
            element= {[<HomeSearch />]}
            />
            <Route 
            path="register-seller"
            element={[<SellerForm/>, <DisplaySellers user="Seller"/>]}
            />
            <Route
            path="register-buyer"
            element= {[<Buyerform/>, <DisplayBuyers user="Buyer"/>]}
            />
            <Route
            path="properties/:query"
            element={<DisplayProperties/>}
            />
            <Route path='register-property' element={<PropertyForm/>}></Route>
            <Route
            path="about-us"
            element={<AboutUs/>}
            />
            <Route path='view/:property_id' element={<DisplaySelectedProperty/>}></Route>
            <Route
            path="sign-in"
            element={<SignIn/>}
            />
          </Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
