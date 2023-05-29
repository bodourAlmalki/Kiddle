import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Courses from './components/courses/courses';
// import Footer from './components/footer/Footer';
import Coursespage from './pages/coursesPage.jsx';
import HomePage from './pages/HomePage';
import LessonsHtml_1 from './pages/Lessons-page/LessonsHtml_1.jsx';
import QuizHtml_1 from './pages/Quiz-page/QuizHtml-1.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Coursespage />} />
          <Route path="/lessons" element={<LessonsHtml_1 />} />
          <Route path="/Quiz" element={<QuizHtml_1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
