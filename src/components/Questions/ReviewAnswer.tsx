import React from 'react';

interface IReviewAnswersProps {
  questions: { text: string }[];
  answers: string[];
  onEditAnswer: (questionIndex: number) => void;
}

const ReviewAnswers = ({ questions, answers, onEditAnswer }: IReviewAnswersProps) => {
  return (
    <div>
      <h2 className="text-xl text-black mb-4">Your Answers:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="mb-2">
            <div className="font-bold">{question.text}</div>
            <div className="flex justify-between items-center">
              <span>{answers[index] || "No answer"}</span>
              <button
                onClick={() => onEditAnswer(index)}
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewAnswers;
