import React, { useState } from 'react';
import './App.css';
import quizData from './Components/quizData';
import Question from './Components/Question';
import Result from './Components/Result';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSubmit = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);

    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = {
      question: quizData[currentQuestion].question,
      answer: selectedAnswer
    };
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]?.answer || null);
    }
  };

  const finishQuiz = () => {
    setIsQuizFinished(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setIsQuizFinished(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-container">
      <h1>Country Capitals Quiz</h1>
      {!isQuizFinished ? (
        <>
          <Question
            question={quizData[currentQuestion]}
            onAnswerSubmit={handleAnswerSubmit}
            onNext={nextQuestion}
            onPrev={prevQuestion}
            isFirst={currentQuestion === 0}
            isLast={currentQuestion === quizData.length - 1}
            selectedAnswer={selectedAnswer}
          />
          {currentQuestion === quizData.length - 1 && (
            <button onClick={finishQuiz} style={{ marginTop: '20px' }}>Finish Quiz</button>
          )}
        </>
      ) : (
        <Result
          score={score}
          totalQuestions={quizData.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};


export default App;
