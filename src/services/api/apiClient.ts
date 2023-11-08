import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: {
    // Paste your API Ninjas API key here
    'X-Api-Key': '',
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
