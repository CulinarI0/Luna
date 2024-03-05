const QuestionChoice = ({
  question,
  handleChange,
  answers,
  isDisabled,
  suggestedOptions,
}: IQuestionProps) => {
  const optionsToDisplay = suggestedOptions || question.options;
  if (optionsToDisplay == undefined) return;

  return (
    <div key={question.id} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {question.number}. {question.text}
      </label>
      <div className="flex items-center space-x-2">
        {optionsToDisplay.map((option, optionIndex) => (
          <label key={optionIndex} className="inline-flex items-center">
            <input
              type="radio"
              name={`question-${question.number}`}
              value={option}
              className="form-radio h-5 w-5 text-blue-600"
              checked={answers[question.id] === option}
              onChange={(e) => handleChange(question.id, e.target.value)}
              disabled={isDisabled}
            />
            <span className="ml-2 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionChoice;
