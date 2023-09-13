import api from '../api/apiClient';
import { getExerciseListItems } from '../../helpers/exercisesHelpers';

interface ExercisesListParams {
  queryKey: [
    string,
    {
      type?: string;
      muscle?: string;
      difficulty?: string;
      name?: string;
    }
  ];
  pageParam?: number;
}

const getExercisesList = async ({
  queryKey: [, params],
  pageParam = 0,
}: ExercisesListParams) => {
  return api
    .get('exercises', {
      params: {
        offset: pageParam * 10,
        ...params,
      },
    })
    .then((response) => {
      return {
        exercises: getExerciseListItems(response.data),
      };
    });
};

export { getExercisesList };
