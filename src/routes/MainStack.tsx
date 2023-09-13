import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';

import SearchFormScreen from '../screens/SearchFormScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'aliceblue',
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="MainForm"
        component={SearchFormScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{
          headerTitle: 'Search Results',
        }}
      />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetailsScreen}
        options={{
          headerTitle: 'Exercise details',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
