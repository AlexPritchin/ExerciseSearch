import { ExerciseItem, ExerciseListPage } from '../types/searchTypes';

const getExerciseListItems = (data: any): ExerciseItem[] => {
  return (data as Array<any>).map<ExerciseItem>((dataItem) => dataItem as ExerciseItem);
};

const getAllExercisesArrayFromPages = (exercisesPages?: ExerciseListPage[]) => {
  return exercisesPages?.flatMap((page) => page.exercises);
};

const getParamForRequest = (label?: string) => {
  return label?.toLowerCase().split(' ').join('_');
} 

export {
  getExerciseListItems,
  getAllExercisesArrayFromPages,
  getParamForRequest,
};
