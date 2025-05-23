import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar    from './components/Navbar';
import HomePage  from './components/Home';
import Resources from './components/Resources';
import QuizPage  from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import ForumPage from './components/Forum';
import { db } from './firebase';
import Results from './components/Result';
import LoginSignup from './components/LoginSignup'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quiz"      element={<QuizPage />} />
        <Route path="/quiz/start" element={<QuizQuestion />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </>
  );
}
