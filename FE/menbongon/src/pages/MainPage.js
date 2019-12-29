import React from 'react';
import '../css/Main.css'

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div className = "menbong">
      <Navigation />
      <Header />
      <Footer/>
    </div>  
  );
}

export default MainPage;
