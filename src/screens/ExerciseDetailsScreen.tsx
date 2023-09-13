import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getSplittedInstructions } from '../helpers/exercisesHelpers';

import { MainStackParamList } from '../routes/types';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'ExerciseDetails'>;

const ExerciseDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const exercise = route.params.exercise;

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ paddingTop: 30, paddingBottom: 30, gap: 30 }}
      showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>{exercise.name}</Text>
      <View style={styles.mainContainer}>
        <View style={{ gap: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Type:</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Muscle:</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Equipment:</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Difficulty:</Text>
        </View>
        <View style={{ gap: 20 }}>
          <Text style={{ fontSize: 22 }}>{exercise.type}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.muscle}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.equipment}</Text>
          <Text style={{ fontSize: 22 }}>{exercise.difficulty}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 26, fontWeight: 'bold', width: '100%', textAlign: 'center', marginTop: 30 }}>Instructions</Text>
      <Text style={{ fontSize: 24, paddingHorizontal: 20, lineHeight: 40 }}>{getSplittedInstructions(exercise.instructions)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    gap: 60,
  },
});

export default ExerciseDetailsScreen;
