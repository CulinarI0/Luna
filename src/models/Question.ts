interface Answer {
  [key: string]: string;
}

interface Question {
  text: string;
  type: "choice" | "text";
  options?: string[];
  id: string;
  number: number;
  constraints?: Constraint[];
}

interface Constraint {
  dependsOnId: string;
  conditions: { [key: string]: string };
  suggestions?: { [key: string]: string[] };
}
