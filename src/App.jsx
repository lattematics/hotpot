import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import QuizPage from './components/QuizPage';
import Navbar from './components/Navbar';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
