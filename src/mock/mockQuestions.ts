const questions: Question[] = [
  {
    text: "What kind of wine do you like?",
    type: "choice",
    options: ["Sweet", "Dry", "Test1"],
    id: "fbb10cd6-f218-4d3f-ac94-f895ba50737b",
    number: 1,
  },
  {
    text: "Please describe your ideal wine.",
    type: "text",
    id: "0dc86cc2-9cbc-4f76-aaea-119ed2355fb6",
    number: 3,
    constraints: [
      {
        // This question's answer is dependent on the answer to the question with the following id
        dependsOnId: "fbb10cd6-f218-4d3f-ac94-f895ba50737b",
        conditions: {
          Dry: "Everything is broken!!!! But LGTM for me",
        },
      },
    ],
  },
  {
    text: "What wine do you like?",
    type: "choice",
    options: ["Red wine", "Merlot", "Test2"],
    id: "7917f388-f6f8-4da4-bba2-47ef78dfa221",
    number: 2,
    constraints: [
      {
        // This question's answer is dependent on the answer to the question with the following id
        dependsOnId: "fbb10cd6-f218-4d3f-ac94-f895ba50737b",
        conditions: {
          Sweet: "Merlot",
        },
        suggestions: {
          Test1: ["Red wine", "Conte", "Rosé"],
        },
      },
    ],
  },
];

export default questions;
