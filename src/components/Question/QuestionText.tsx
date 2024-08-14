import { IQuestionProps } from "./IIQuestionsProps";

const QuestionText = ({
  question,
  handleChange,
  answers,
  isDisabled,
}: IQuestionProps) => {
  return (
    <div key={question.id} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {question.number}. {question.text}
      </label>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={answers[question.id] || ""}
        onChange={(e) => handleChange(question.id, e.target.value)}
        disabled={isDisabled}
      />
    </div>
  );
};

export default QuestionText;
