
export enum CategoryType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F'
}

export interface Choice {
  id: CategoryType;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export interface University {
  name: string;
  faculty?: string;
}

export interface Direction {
  id: number;
  name: string;
  universities: University[];
}

export interface CategoryMapping {
  letter: CategoryType;
  label: string;
  directions: number[];
}

export interface QuizResult {
  topCategories: CategoryType[];
  scores: Record<CategoryType, number>;
  recommendedUnis: {
    uni: University;
    directionName: string;
  }[];
}
