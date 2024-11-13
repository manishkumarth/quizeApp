// src/App.jsx

import React, { useState } from 'react';
import { questions } from './data/questions';
import Result from './Components/Result.jsx'
import './index.css';
import Question from './Components/Question.jsx';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  return (
    <div className="app">
      {quizFinished ? (
        <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
     
    </div>
  );
};

export default App;
