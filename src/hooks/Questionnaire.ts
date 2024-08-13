import { useEffect, useState } from "react";

const useQuestionnaire = (questions: Question[]) => {
  const [answers, setAnswers] = useState<Answer>({});
  const [disabledQuestions, setDisabledQuestions] = useState<{
    [key: string]: boolean;
  }>({});
  const [suggestedOptionsState, setSuggestedOptions] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    let newDisabledQuestions = { ...disabledQuestions };

    questions.forEach((question) => {
      question.constraints?.forEach((constraint) => {
        if (
          answers[constraint.dependsOnId] &&
          constraint.conditions[answers[constraint.dependsOnId]]
        ) {
          newDisabledQuestions[question.id] = true;
        } else {
          newDisabledQuestions[question.id] = false;
        }
      });
    });

    setDisabledQuestions(newDisabledQuestions);
    debugger;
    const newSuggestedOptions: { [key: string]: string[] } = {};
    questions.forEach((question) => {
      question.constraints?.forEach((constraint) => {
        if (answers[constraint.dependsOnId]) {
          const suggestions =
            constraint.suggestions?.[answers[constraint.dependsOnId]];
          if (suggestions) {
            newSuggestedOptions[question.id] = suggestions;
          }
        }
      });
    });
    setSuggestedOptions(newSuggestedOptions);
  }, [answers, disabledQuestions, questions]);

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => {
      let newAnswers = { ...prev, [id]: value };
      const currentQuestion = questions.find((question) => question.id === id);

      currentQuestion?.constraints?.forEach((constraint) => {
        // Find the answer to the question this one depends on
        const dependentAnswer = newAnswers[constraint.dependsOnId];
        // Check if the condition for the dependent answer is met
        const condition = constraint.conditions[dependentAnswer];
        debugger;
        if (condition) {
          // If condition is met, update the answer of the dependent question
          newAnswers[constraint.dependsOnId] = condition;
        }
      });

      // Additionally, check if any other questions depend on this question and update them
      questions.forEach((question) => {
        question.constraints?.forEach((constraint) => {
          if (constraint.dependsOnId === id) {
            const condition = constraint.conditions[value];
            if (condition) {
              newAnswers[question.id] = condition;
            } else if (newAnswers[question.id]) {
              // If the condition no longer applies, remove the constrained answer
              delete newAnswers[question.id];
            }
          }
        });
      });

      return newAnswers;
    });
  };

  return { answers, handleChange, disabledQuestions, suggestedOptionsState };
};

export default useQuestionnaire;
