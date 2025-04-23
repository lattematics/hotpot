import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage   from './components/Home';
import QuizPage   from './components/Quiz';       
import Resources  from './components/Resources';
import Navbar     from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quiz"      element={<QuizPage />} />
        
      </Routes>
    </Router>
  );
}
