import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ModalSelector, { ModalSelectorProps } from 'react-native-modal-selector';

interface Props {
  data: ModalSelectorProps['data'];
  onChange: ModalSelectorProps['onChange'];
  selectedKey: ModalSelectorProps['selectedKey'];
  inputValue?: string;
  inputPlaceholder?: string;
  clearOnPress?: PressableProps['onPress'];
}

const FormModalSelector: React.FC<Props> = ({ inputValue, inputPlaceholder, clearOnPress, ...rest }) => {
  return (
    <View style={{ width: '100%', flexDirection: 'row', marginTop: 30, gap: 10 }}>
      <ModalSelector
        supportedOrientations={['portrait']}
        cancelText="Cancel"
        style={{ flex: 5 }}
        selectedItemTextStyle={styles.pickerSelectedItemText}
        sectionTextStyle={styles.pickerSectionText}
        optionContainerStyle={{ backgroundColor: '#fff' }}
        cancelContainerStyle={{ backgroundColor: '#bbb', borderRadius: 4 }}
        {...rest}
        >
        <TextInput
          value={inputValue}
          editable={false}
          placeholder={inputPlaceholder}
          style={styles.formTextInput}
        />
      </ModalSelector>
      {inputValue && (
        <Pressable
          style={[styles.clearPickerPressable, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
          onPress={clearOnPress}>
          <Text style={{ fontSize: 16 }}>Clear</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formTextInput: {
    borderWidth: 1,
    borderRadius: 6,
    height: 37,
    width: '100%',
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
  pickerSelectedItemText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  pickerSectionText: {
    fontWeight: '600',
    fontSize: 20,
  },
  clearPickerPressable: {
    backgroundColor: '#ffd6e1',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default FormModalSelector;
