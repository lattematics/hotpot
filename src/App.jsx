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
import Login from './components/Login';
import Signup from './components/Signup';


export default function App() {
  const [isLogin, setIsLogin] = useState(true);

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
        <Route path="/login" element={<Login />} />
      </Routes>

      <div>
        <button class="formbtn" onClick={() => setIsLogin(true)}>Login</button>
        <button class="formbtn" onClick={() => setIsLogin(false)}>Sign Up</button>

        {isLogin ? (
          <Login />
        ) : (
          <Signup />
        )}
      </div>
    </>
  );
}
