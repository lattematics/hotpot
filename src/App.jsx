import HomePage from './components/Home';
import Navbar from './components/Navbar';
import QuizPage from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/start" element={<QuizQuestion/>} />
          {/* Add other routes here like /quiz, /forum, etc. */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
