function Question({
  questionData,
  currentQuestion,
  totalQuestions,
  selectedOption,
  setSelectedOption
}) {
  return (
    <div className="question-box">
      <h3>
        Question {currentQuestion + 1} / {totalQuestions}
      </h3>

      <p className="question-text">{questionData.question}</p>

      {questionData.options.map((option, index) => (
        <label
          key={index}
          className={`option ${
            selectedOption === index ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value={index}
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default Question;
