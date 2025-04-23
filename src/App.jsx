import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage     from './components/Home';
import Resources    from './components/Resources';      
import QuizPage     from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import ForumPage    from './components/Forum';
import AboutPage    from './components/About';
import LoginPage    from './components/Login';

import Navbar       from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/resources"   element={<Resources />} />    
        <Route path="/quiz"        element={<QuizPage />} />
        <Route path="/quiz/start"  element={<QuizQuestion />} />
        <Route path="/forum"       element={<ForumPage />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/login"       element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
