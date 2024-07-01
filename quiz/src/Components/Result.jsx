
import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions, onRestart }) => {
    const allCorrect = score === totalQuestions;
    return (
      <div className={`result-container ${allCorrect ? 'all-correct' : 'has-mistakes'}`}>
        <h2>Quiz Results</h2>
        <p>Your score: {score} / {totalQuestions}</p>
        <button onClick={onRestart}>Repeat Quiz</button>
      </div>
    );
  };

export default Result;
