import { ChangeEvent } from "react";

interface IQuestionProps {
  question: {
    text: string;
    type: string;
    options?: string[];
  };
  answer: string;
  onAnswerChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Question = ({ question, answer, onAnswerChange }: IQuestionProps) => {
  const renderInput = () => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            value={answer || ""}
            onChange={onAnswerChange}
            className="mt-2 p-2 border border-gray-300 rounded text-black"
            placeholder="Your answer"
          />
        );
      case "choice":
        if (question.options == undefined) return null;
        return (
          <div>
            {question.options?.map((option, index) => (
              <label key={index} className="block mt-2">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={answer === option}
                  onChange={onAnswerChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="text-lg text-black mb-4">{question.text}</div>
      {renderInput()}
    </div>
  );
};

export default Question;
