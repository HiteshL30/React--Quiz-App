import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (
      selectedOption === questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>React Quiz App</h1>

      {showResult ? (
        <Result
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <>
          <Question
            questionData={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <button
            className="btn"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
