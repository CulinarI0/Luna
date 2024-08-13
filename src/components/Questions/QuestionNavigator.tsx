import React from "react";
interface IQuestionNavigatorProps {
  isLastQuestion: boolean;
  onNavigate: () => void;
}

const QuestionNavigator = ({
  isLastQuestion,
  onNavigate,
}: IQuestionNavigatorProps) => {
  return (
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onNavigate}
    >
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
};

export default QuestionNavigator;
