import React from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormModalSelector from '../components/form/FormModalSelector';
import FormSubmitButton from '../components/form/FormSubmitButton';

import { MainStackParamList } from '../routes/types';
import { SearchPickerItem } from '../types/searchTypes';
import { difficultyPickerData, musclePickerData, typePickerData } from '../resources/pickerData';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'MainForm'>;

interface SearchFormValues {
  type: SearchPickerItem;
  muscle: SearchPickerItem;
  difficulty: SearchPickerItem;
  name: string;
}

const SearchFormScreen: React.FC<ScreenProps> = ({ navigation }) => {

  const initialValues: SearchFormValues = {
    type: {},
    muscle: {},
    difficulty: {},
    name: '',
  };

  const formValidate = (values: SearchFormValues) => {
    const errors: any = {};
  
    if (!values.type.label && !values.muscle.label && !values.difficulty.label && !values.name) {
      errors.type = 'At least one field should be not empty';
    }
  
    return errors;
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Exercise Search</Text>
        <Formik
          initialValues={initialValues}
          validate={formValidate}
          validateOnMount
          onSubmit={(values) => {
            Keyboard.dismiss();
            console.log('values', values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            setFieldValue,
          }) => {
            console.log('values', values);
            return (
              <View style={styles.formContainer}>
                <FormModalSelector
                  data={typePickerData}
                  onChange={(option) => {
                    if (typeof(option) === 'object')
                      setFieldValue('type', { ...option });
                  }}
                  selectedKey={values.type.key}
                  inputValue={values.type.label}
                  inputPlaceholder='Exercise type'
                  clearOnPress={() => setFieldValue('type', {})}
                />

                <FormModalSelector
                  data={musclePickerData}
                  onChange={(option) => {
                    if (typeof(option) === 'object')
                      setFieldValue('muscle', { ...option });
                  }}
                  selectedKey={values.muscle.key}
                  inputValue={values.muscle.label}
                  inputPlaceholder='Exercise muscle'
                  clearOnPress={() => setFieldValue('muscle', {})}
                />

                <FormModalSelector
                  data={difficultyPickerData}
                  onChange={(option) => {
                    if (typeof(option) === 'object')
                      setFieldValue('difficulty', { ...option });
                  }}
                  selectedKey={values.difficulty.key}
                  inputValue={values.difficulty.label}
                  inputPlaceholder='Exercise difficulty'
                  clearOnPress={() => setFieldValue('difficulty', {})}
                />

                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Exercise name"
                  style={[
                    styles.formTextInput,
                    {
                      borderColor: 'lightslategrey',
                      marginTop: 30,
                    },
                  ]}
                />

                <FormSubmitButton
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  title="Search"
                />
              </View>
            );
          }}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('window').height,
  },
  title: {
    width: '100%',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '25%',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginTop: '25%',
  },
  formTextInput: {
    borderWidth: 1,
    borderRadius: 6,
    height: 37,
    width: '100%',
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
});

export default SearchFormScreen;
