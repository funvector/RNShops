import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../../shared/theme/colors';

const NameFormInputRegister = ({ inputNamelHandler, state }) => {

  const {
    nameValue,
    nameIsValid
  } = state

  const nameChangeInputValue = (nameValue) => inputNamelHandler(nameValue)

  return (
    <>
      <Hoshi
        style={ nameIsValid ? styles.nameHitoshiStyleValid : styles.nameHitoshiStyle }
        borderColor={'#757575'} 
        borderHeight={1} 
        label={'name'} 
        inputPadding={16}
        value={nameValue}
        onChangeText={nameChangeInputValue}>
      </Hoshi>
      <Text style={ nameIsValid ? styles.errorTextHidden : styles.errorTextVisible }>This field is required</Text>
    </>
  )
}

const styles = StyleSheet.create({
  nameHitoshiStyle: {
    marginBottom: 20
  },
  nameHitoshiStyleValid: {
    marginBottom: 60
  },
  errorTextHidden: {
    display: 'none'
  },
  errorTextVisible: {
    display: 'flex',
    color: COLORS.invalidInput,
    fontSize: 15,
    marginBottom: 60
  }
});

export default NameFormInputRegister