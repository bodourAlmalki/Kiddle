import React from 'react';
import Courses from '../components/courses/courses';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navBar/Navbar';

export default function Coursespage() {
  return (
    <div>
      <Navbar />
      <Courses />
      <Footer/>
    </div>
  );
}
