"use client";
import { ChangeEvent, useState } from "react";
import Modal from "@/components/Modal";
import questions from "@/mock/mockQuestions";
import QuestionNavigator from "@/components/Questions/QuestionNavigator";
import Question from "@/components/Questions/Question";
import ReviewAnswers from "@/components/Questions/ReviewAnswer";
import useModal from "@/hooks/useModal";

export default function MatchPage() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();


  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleEditAnswer = (questionIndex: number) => {
    setCurrentQuestionIndex(questionIndex);
    setIsFinished(false);
    setIsEditMode(true); // Entering edit mode
  };

  const handleFinishEdit = () => {
    setIsEditMode(false); // Exiting edit mode
    setIsFinished(true); // Finish the questionnaire
  };
  
  const handleFinishQuestions = () => {
    setIsFinished(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuestions();
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Open Matching Questions
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="text-lg text-black mb-4 overflow-auto max-h-60">
          {isFinished ? (
            <ReviewAnswers
              questions={questions}
              answers={userAnswers}
              onEditAnswer={handleEditAnswer}
            />
          ) : (
            <Question
              question={currentQuestion}
              answer={userAnswers[currentQuestionIndex] || ""}
              onAnswerChange={handleAnswerChange}
            />
          )}
        </div>

        {!isFinished && (
          <QuestionNavigator
            isLastQuestion={isEditMode ? true : isLastQuestion} // In edit mode, always treat it as the last question
            onNavigate={isEditMode ? handleFinishEdit : (isLastQuestion ? handleFinishQuestions : handleNextQuestion)}
          />
        )}
      </Modal>
    </div>
  );
}