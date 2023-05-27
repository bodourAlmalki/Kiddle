import React from 'react';
import Footer from '../components/footer/Footer';
import HomePageComponent from '../components/HomePage/HomePage';
import Navbar from '../components/navBar/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HomePageComponent />
      <Footer />
    </div>
  );
}
