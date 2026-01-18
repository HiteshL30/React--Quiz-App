function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result-box">
      <h2>Quiz Completed 🎉</h2>
      <p>
        Your Score: <strong>{score}</strong> / {totalQuestions}
      </p>

      <button onClick={onRestart} className="btn">
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
