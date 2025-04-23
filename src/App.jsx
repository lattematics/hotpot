// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage  from './components/Home';
import QuizPage  from './components/QuizPage';
import Resources from './components/Resources';
import Navbar    from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quiz"      element={<QuizPage />} />
        {/* you can add /forum, /about, /login routes here as you build them */}
      </Routes>
    </>
  );
}
