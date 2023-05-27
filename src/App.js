import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Courses from './components/courses/courses';
import Footer from './components/footer/Footer';
import Lesson from './components/Lessons/Lessons';
import Coursespage from './pages/courses';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div>
      {/* <HomePage /> */}
      
      {/* <BrowserRouter> */}
      <Coursespage/>
      {/* <Lesson/> */}
      {/* </BrowserRouter> */}
    </div>
  );
}
