import React, { useState } from 'react';

export default function QuizQuestion() {
  const [weeklySession, setWeeklySession] = useState(null);
  const [deviceAccess, setDeviceAccess] = useState(null);
  const [costImportance, setCostImportance] = useState(null);
  const [overwhelmedFeeling, setOverwhelmedFeeling] = useState(null);

  return (
    <div className="quiz-form-page">
      <form className="quiz-form">
        <h2 className="quiz-title">Mental Health Resource Quiz</h2>
        <p className="quiz-description">Answer honestly — it helps us match you with better resources!</p>

        {/* 1. How much time */}
        <div className="quiz-question">
          <p>How much time can you realistically set aside each week for your mental wellness?</p>
          <div className="quiz-options">
            <label><input type="radio" name="time" /> None</label>
            <label><input type="radio" name="time" /> 1–3 Hours</label>
            <label><input type="radio" name="time" /> 3–5 Hours</label>
            <label><input type="radio" name="time" /> 5–10 Hours</label>
          </div>
        </div>

        {/* 2. Manageable weekly sessions (Scale 1–5) */}
        <div className="quiz-question">
          <p>How manageable would it be for you to attend regular weekly sessions or programs?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={`weekly-${num}`}
                type="button"
                className={`scale-btn ${weeklySession === num ? 'selected' : ''}`}
                onClick={() => setWeeklySession(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Preferred setting */}
        <div className="quiz-question">
          <p>What kind of setting do you prefer for support services?</p>
          <div className="quiz-options">
            <label><input type="radio" name="setting" /> In-person</label>
            <label><input type="radio" name="setting" /> Online only</label>
            <label><input type="radio" name="setting" /> No preference</label>
          </div>
        </div>

        {/* 4. Reliable access (Scale 1–5) */}
        <div className="quiz-question">
          <p>How reliable is your access to a device and internet for online sessions?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={`device-${num}`}
                type="button"
                className={`scale-btn ${deviceAccess === num ? 'selected' : ''}`}
                onClick={() => setDeviceAccess(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Importance of free/low-cost (Scale 1–5) */}
        <div className="quiz-question">
          <p>How important is it for resources to be free or low-cost?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={`cost-${num}`}
                type="button"
                className={`scale-btn ${costImportance === num ? 'selected' : ''}`}
                onClick={() => setCostImportance(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* 6. Paid options */}
        <div className="quiz-question">
          <p>Would you consider paid options if they better suit your needs?</p>
          <div className="quiz-options">
            <label><input type="radio" name="paid" /> Yes</label>
            <label><input type="radio" name="paid" /> No</label>
            <label><input type="radio" name="paid" /> Maybe, depending on cost</label>
          </div>
        </div>

        {/* 7. How often overwhelmed (Scale 1–5) */}
        <div className="quiz-question">
          <p>How often do you feel overwhelmed or mentally drained?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={`overwhelmed-${num}`}
                type="button"
                className={`scale-btn ${overwhelmedFeeling === num ? 'selected' : ''}`}
                onClick={() => setOverwhelmedFeeling(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* 8. Source of stress (Multiple Choice - Checkboxes) */}
        <div className="quiz-question">
          <p>Which areas of your life are currently the biggest source of stress?</p>
          <div className="quiz-options">
            <label><input type="checkbox" name="stress" /> School / academics</label>
            <label><input type="checkbox" name="stress" /> Work / job search</label>
            <label><input type="checkbox" name="stress" /> Relationships</label>
            <label><input type="checkbox" name="stress" /> Family</label>
            <label><input type="checkbox" name="stress" /> Health</label>
            <label><input type="checkbox" name="stress" /> Identity / self-esteem</label>
          </div>
        </div>

        {/* 9. Open-Ended Text */}
        <div className="quiz-question">
          <p>What would a helpful support experience look like for you?</p>
          <textarea className="text-input" placeholder="Type your answer here..." rows="4"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
