export type ExerciseDifficultyNameType = 'beginner' | 'intermediate' | 'expert';

export type SearchPickerItem = {
  key?: string;
  section?: boolean;
  label?: string;
};

export type ExerciseItem = {
  name?: string;
  type?: string;
  muscle?: string;
  equipment?: string;
  difficulty?: ExerciseDifficultyNameType;
  instructions?: string;
};

export type ExerciseListPage = {
  exercises: ExerciseItem[];
};
