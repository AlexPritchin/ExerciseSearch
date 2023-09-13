import { ExerciseItem, ExerciseListPage } from '../types/searchTypes';

const getExerciseListItems = (data: any): ExerciseItem[] => {
  return (data as Array<any>).map<ExerciseItem>((dataItem) => dataItem as ExerciseItem);
};

const getAllExercisesArrayFromPages = (exercisesPages?: ExerciseListPage[]) => {
  return exercisesPages?.flatMap((page) => page.exercises);
};

const getParamForRequest = (label?: string) => {
  return label?.toLowerCase().split(' ').join('_');
};

const getSplittedInstructions = (instructions?: string) => {
  return instructions?.split(/\s(?=\w+:)/).join('\n\n');
};

export {
  getExerciseListItems,
  getAllExercisesArrayFromPages,
  getParamForRequest,
  getSplittedInstructions,
};
