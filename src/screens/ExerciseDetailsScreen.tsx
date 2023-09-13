import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getSplittedInstructions } from '../helpers/exercisesHelpers';

import { MainStackParamList } from '../routes/types';

type ScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ExerciseDetails'
>;

const ExerciseDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const exercise = route.params.exercise;

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{exercise.name}</Text>
      <View style={styles.mainContainer}>
        <View style={{ gap: 20 }}>
          <Text style={styles.exerciseParamsTitle}>Type:</Text>
          <Text style={styles.exerciseParamsTitle}>Muscle:</Text>
          <Text style={styles.exerciseParamsTitle}>Equipment:</Text>
          <Text style={styles.exerciseParamsTitle}>Difficulty:</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Text style={{ fontSize: 22 }}>{exercise.type}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.muscle}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.equipment}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.difficulty}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.title,
          {
            fontSize: 26,
            marginTop: 30,
          },
        ]}>
        Instructions
      </Text>
      <Text style={styles.instructionsText}>
        {getSplittedInstructions(exercise.instructions)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    gap: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    gap: 60,
  },
  exerciseParamsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  instructionsText: {
    fontSize: 24,
    paddingHorizontal: 20,
    lineHeight: 40,
  },
});

export default ExerciseDetailsScreen;
