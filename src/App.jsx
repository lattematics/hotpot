import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar    from './components/Navbar';
import HomePage  from './components/Home';
import Resources from './components/Resources';
import QuizPage  from './components/Quiz';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quiz"      element={<QuizPage />} />
      </Routes>
    </>
  );
}

