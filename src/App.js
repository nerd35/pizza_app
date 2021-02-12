import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalstyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Features from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products data={productData} heading='Choose your favorite pizza'/>
      <Features/>
      <Products data={productDataTwo} heading='Sweet treat for you'/>
      <Footer/>
    </Router>
  );
}

export default App;
