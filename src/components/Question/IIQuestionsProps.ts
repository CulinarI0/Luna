interface IQuestionProps {
    question: Question;
    handleChange: (id: string, value: string) => void;
    answers: Answer;
    isDisabled: boolean;
    suggestedOptions?: string[];
  }
  