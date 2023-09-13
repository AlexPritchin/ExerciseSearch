import { ExerciseItem } from "../types/searchTypes";

export type MainStackParamList = {
  MainForm: undefined;
  SearchResults: {
    type?: string;
    muscle?: string;
    difficulty?: string;
    name?: string;
  };
  ExerciseDetails: { exercise: ExerciseItem };
};
