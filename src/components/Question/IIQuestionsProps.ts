import { Answer, Question } from "@/models/Question";

export interface IQuestionProps {
  question: Question;
  // eslint-disable-next-line no-unused-vars
  handleChange: (id: string, value: string) => void;
  answers: Answer;
  isDisabled: boolean;
  suggestedOptions?: string[];
}
