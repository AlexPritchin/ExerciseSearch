import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';

import SearchFormScreen from '../screens/SearchFormScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainForm"
        component={SearchFormScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{
          headerStyle: {
            backgroundColor: 'aliceblue',
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerBackTitleVisible: false,
          headerTitle: 'Search Results',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
