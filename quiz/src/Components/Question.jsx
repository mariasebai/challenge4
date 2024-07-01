
import React from 'react';
import './Question.css';

const Question = ({ question, onAnswerSubmit, onNext, onPrev, isFirst, isLast, selectedAnswer }) => {
    return (
      <div className="question-container">
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <button
                className={selectedAnswer === option ? 'selected' : ''}
                onClick={() => onAnswerSubmit(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {!isFirst && <button onClick={onPrev}>Previous</button>}
          {!isLast && <button onClick={onNext}>Next</button>}
        </div>
      </div>
    );
  };

export default Question;
