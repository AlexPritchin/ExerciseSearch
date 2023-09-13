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
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{exerciseItem.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
          <View style={{ gap: 5, flex: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Type:</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Muscle:</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Equipment:</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Difficulty:</Text>
          </View>
          <View style={{ gap: 5, flex: 5 }}>
            <Text style={{ fontSize: 18 }}>{exerciseItem.type}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.muscle}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.equipment}</Text>
            <Text style={{ fontSize: 18 }}>{exerciseItem.difficulty}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 18 }} numberOfLines={1}>{exerciseItem.instructions}</Text>
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
});

export default ListTouchableItem;
