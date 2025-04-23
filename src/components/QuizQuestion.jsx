import React, { useState } from 'react';

export default function QuizQuestion() {
  // Question states
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(""); 


  const [settingPref, setSettingPref] = useState("");
  const [affordable, setAffordable] = useState(null);
  const [schoolStress, setSchoolStress] = useState(null);
  const [workBalance, setWorkBalance] = useState(null);
  const [anxiety, setAnxiety] = useState(null);
  const [stressSigns, setStressSigns] = useState(null);
  const [socialFeeling, setSocialFeeling] = useState("");
  const [lowMood, setLowMood] = useState(null);
  const [peerSupport, setPeerSupport] = useState(null);
  const [identityAffirming, setIdentityAffirming] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation check — are all questions answered?
    if (
      !settingPref ||
      affordable === null ||
      schoolStress === null ||
      workBalance === null ||
      anxiety === null ||
      stressSigns === null ||
      !socialFeeling ||
      lowMood === null ||
      peerSupport === null ||
      identityAffirming === null
    ) {
      setFormError("⚠️ Please answer all the questions before submitting.");
      setSubmitted(false);
      return;
    }

    // If everything is filled:
    setFormError("");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="quiz-form-page">
      {submitted && (
        <div className="submit-message">
          🎉 Your quiz was submitted successfully! We'll use your answers to match you with resources.
        </div>
      )}

      {formError && <div className="error-message">{formError}</div>}

      <form className="quiz-form" onSubmit={handleSubmit}>
        <h2 className="quiz-title">Personalized Resource Quiz</h2>
        <p className="quiz-description">Answer honestly — it helps us match you with better support options!</p>

        {/* 1. Setting Preference */}
        <div className="quiz-question">
          <p>What kind of setting do you prefer for support services?</p>
          <div className="quiz-options">
            <label>
              <input type="radio" name="settingPref" value="in-person" onChange={() => setSettingPref("in-person")} />
              In-person
            </label>
            <label>
              <input type="radio" name="settingPref" value="online" onChange={() => setSettingPref("online")} />
              Online only
            </label>
            <label>
              <input type="radio" name="settingPref" value="no-preference" onChange={() => setSettingPref("no-preference")} />
              No preference
            </label>
          </div>
        </div>

        {/* 2. Affordable */}
        <div className="quiz-question">
          <p>How important is it for resources to be free or low-cost?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`aff-${num}`} type="button" className={`scale-btn ${affordable === num ? 'selected' : ''}`} onClick={() => setAffordable(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 3. School Stress */}
        <div className="quiz-question">
          <p>How manageable are your academic responsibilities right now?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`school-${num}`} type="button" className={`scale-btn ${schoolStress === num ? 'selected' : ''}`} onClick={() => setSchoolStress(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 4. Work Balance */}
        <div className="quiz-question">
          <p>How confident do you feel in managing work or professional responsibilities?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`work-${num}`} type="button" className={`scale-btn ${workBalance === num ? 'selected' : ''}`} onClick={() => setWorkBalance(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 5. Anxiety (overwhelmed) */}
        <div className="quiz-question">
          <p>How often do you feel overwhelmed or mentally drained?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`anx-${num}`} type="button" className={`scale-btn ${anxiety === num ? 'selected' : ''}`} onClick={() => setAnxiety(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 6. Physical stress signs */}
        <div className="quiz-question">
          <p>How often do you experience physical signs of stress (headache, fatigue, racing thoughts)?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`signs-${num}`} type="button" className={`scale-btn ${stressSigns === num ? 'selected' : ''}`} onClick={() => setStressSigns(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 7. Social feeling */}
        <div className="quiz-question">
          <p>In social or high-pressure situations, how do you typically feel?</p>
          <div className="quiz-options">
            <label>
              <input type="radio" name="socialFeeling" value="calm" onChange={() => setSocialFeeling("calm")} />
              Calm or neutral
            </label>
            <label>
              <input type="radio" name="socialFeeling" value="nervous" onChange={() => setSocialFeeling("nervous")} />
              A little nervous
            </label>
            <label>
              <input type="radio" name="socialFeeling" value="overwhelmed" onChange={() => setSocialFeeling("overwhelmed")} />
              Overwhelmed or panicky
            </label>
          </div>
        </div>

        {/* 8. Low mood */}
        <div className="quiz-question">
          <p>How often do you feel disconnected from things you used to enjoy?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`low-${num}`} type="button" className={`scale-btn ${lowMood === num ? 'selected' : ''}`} onClick={() => setLowMood(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 9. Peer support comfort */}
        <div className="quiz-question">
          <p>How comfortable are you sharing your thoughts in a group or peer setting?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`peer-${num}`} type="button" className={`scale-btn ${peerSupport === num ? 'selected' : ''}`} onClick={() => setPeerSupport(num)}>{num}</button>
            ))}
          </div>
        </div>

        {/* 10. Identity-based support */}
        <div className="quiz-question">
          <p>How important is it for you to connect with someone who understands your background or identity?</p>
          <div className="quiz-scale">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={`identity-${num}`} type="button" className={`scale-btn ${identityAffirming === num ? 'selected' : ''}`} onClick={() => setIdentityAffirming(num)}>{num}</button>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
