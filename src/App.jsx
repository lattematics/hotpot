import Navbar from "./components/Navbar";
import HomePage from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here like /quiz, /forum, etc. */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
