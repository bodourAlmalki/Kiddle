import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import { tutorialData } from './TuturialData';

const Tutorial = ({ tutorial }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSubmit = (userAnswer) => {
    // Logic to check user's answer and update the score
    // ...

    setShowQuiz(false); // Hide the quiz after submission
    setScore(score + 1); // Increment the score by 1 for correct answers
  };

  return (
    <div>
      {tutorialData.map((tutorial, index) => {
        return (
          <>
            <div className="content">
              <div key={index}>
                <h2>{tutorial.title}</h2>
                <p>{tutorial.Description}</p>
                <iframe
                  src={tutorial.videoUrl}
                  title="Tutorial"
                  width="560"
                  height="315"
                  allowFullScreen
                  className={tutorial.ClassName}
                ></iframe>
              </div>
            </div>
          </>
        );
      })}
      <h3>Tutorial</h3>

      {!showQuiz && (
        <button onClick={() => setShowQuiz(true)}>Start Quiz</button>
      )}
      {showQuiz && (
        <Quiz
          question={tutorial.quizQuestion}
          options={tutorial.quizOptions}
          handleQuizSubmit={handleQuizSubmit}
        />
      )}
      {showQuiz && <p>Score: {score}</p>}
    </div>
  );
};

export default Tutorial;
