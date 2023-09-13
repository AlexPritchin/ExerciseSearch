import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: {
    'X-Api-Key': '59fBcOh0ZttSaD4qNFpXcA==lFgzi8SpU6V3wJts',
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.status && error.message === 'Network Error') {
      Alert.alert(
        'Network error',
        'Server is unavailable now. Please try again later.'
      );
    } else {
      Alert.alert('Error', 'Something went wrong');
    }

    return Promise.reject(error);
  }
);

export default api;
