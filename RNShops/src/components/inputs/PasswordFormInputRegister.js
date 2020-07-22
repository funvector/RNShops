import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../../shared/theme/colors';

const PasswordFormInputRegister = ({ inputPasswordHandler, state }) => {

  const {
    passwordValue,
    passwordIsValid
  } = state

  const passwordChangeInputValue = (passwordValue) => inputPasswordHandler(passwordValue)

  return (
    <>
      <Hoshi
        secureTextEntry
        style={ passwordIsValid ? styles.passwordHitoshiStyleValid : styles.passwordHitoshiStyle }
        borderColor={COLORS.inputBorderColor} 
        borderHeight={1} 
        label={'password'} 
        inputPadding={16}
        value={passwordValue}
        onChangeText={passwordChangeInputValue}>
      </Hoshi>
      <Text style={ passwordIsValid ? styles.errorTextHidden : styles.errorTextVisible }>Min length 7</Text>
    </>
  )
}

const styles = StyleSheet.create({
  passwordHitoshiStyle: {
    marginBottom: 20
  },
  passwordHitoshiStyleValid: {
    marginBottom: 40
  },
  errorTextHidden: {
    display: 'none'
  },
  errorTextVisible: {
    display: 'flex',
    color: COLORS.invalidInput,
    fontSize: 15,
    marginBottom: 40
  }
});

export default PasswordFormInputRegister