"use client";
import questions from "@/mock/mockQuestions";
import { renderQuestionComponent } from "@/components/Question/QuestionFactory";
import useQuestionnaire from "@/hooks/Questionnaire";
import { Question } from "@/models/Question";
import React from "react";
export default function MatchPage() {
  const { answers, handleChange, disabledQuestions, suggestedOptionsState } =
    useQuestionnaire(questions);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const renderQuestions = (questions: Question[]) =>
    questions.map((question) => {
      const isDisabled = disabledQuestions[question.id] == true;
      const suggestedOptions = suggestedOptionsState[question.id];
      const questionProps = {
        question,
        handleChange,
        answers,
        isDisabled,
        suggestedOptions,
      };

      return (
        <div key={question.id}>{renderQuestionComponent(questionProps)}</div>
      );
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {renderQuestions(questions.filter((q) => q.type === "choice"))}
        </div>
        <div>{renderQuestions(questions.filter((q) => q.type === "text"))}</div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
