import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
  View,
} from 'react-native';

import { ExerciseItem } from '../../types/searchTypes';

interface Props extends TouchableHighlightProps {
  exerciseItem: ExerciseItem;
}

const ListTouchableItem: React.FC<Props> = ({ exerciseItem, ...rest }) => {
  return (
    <TouchableHighlight {...rest}>
      <View style={styles.containerView}>
        <Text style={styles.exerciseName}>{exerciseItem.name}</Text>
        <View style={styles.exerciseParamsContainer}>
          <View style={styles.exerciseParamsColumn}>
            <Text style={styles.exerciseParamsTitle}>Type:</Text>
            <Text style={styles.exerciseParamsTitle}>Muscle:</Text>
            <Text style={styles.exerciseParamsTitle}>Equipment:</Text>
            <Text style={styles.exerciseParamsTitle}>Difficulty:</Text>
          </View>
          <View style={styles.exerciseParamsColumn}>
            <Text style={{ fontSize: 18 }}>{exerciseItem.type}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.muscle}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.equipment}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.difficulty}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 18 }} numberOfLines={1}>
          {exerciseItem.instructions}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerView: {
    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exerciseParamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  exerciseParamsColumn: {
    flex: 5,
    gap: 5,
  },
  exerciseParamsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListTouchableItem;
