import React from "react";
import QuestionChoice from "./QuestionChoice";
import QuestionText from "./QuestionText";
import { IQuestionProps } from "./IIQuestionsProps";

export const renderQuestionComponent = (props: IQuestionProps) => {
  const { question } = props;

  switch (question.type) {
    case "choice":
      return <QuestionChoice {...props} />;
    case "text":
      return <QuestionText {...props} />;
    default:
      return null;
  }
};
