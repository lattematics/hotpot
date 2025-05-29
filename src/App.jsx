import { Routes, Route } from 'react-router-dom';

import Navbar    from './components/Navbar';
import HomePage  from './components/Home';
import Resources from './components/Resources';
import QuizPage  from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import ForumPage from './components/Forum';
import Results from './components/Result';
import LoginSignup from './components/LoginSignup'


export default function App() {
  return (
    <>
      <div class="notice">
        <h2>Notice!</h2>
        <p>We are unable to complete the website we had previously imagined within the remaining time of our capstone.</p>
        <p>We have decided to open source our project, more details can be found on our <a href="https://github.com/lattematics/hotpot">github</a>.</p>
        <p>Feel free to take inspiration from our project, we wish you the best of luck!</p>
      </div>

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
