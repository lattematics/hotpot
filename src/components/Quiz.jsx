import { Link } from 'react-router-dom';


export default function QuizPage() {
  return (
    <div className="quiz-page">
      <div className="quiz-intro-card">
        <img className="quiz-image" src="/img/quiz.jpg" alt="Hands illustration" />
        <div className="quiz-intro-text">
          <h2>Take a simple quiz to get personalized resources</h2>
          <Link to="/quiz/start">
            <button className="quiz-btn">Take Quiz →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
