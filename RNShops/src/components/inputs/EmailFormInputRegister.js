import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../../shared/theme/colors';

const EmailFormInputRegister = ({ inputEmailHandler, state }) => {

  const {
    emailIsValid,
    emailValue
  } = state

  const emailChangeInputValue = (emailValue) => inputEmailHandler(emailValue)

  return (
    <>
      <Hoshi
        style={ emailIsValid ? styles.emailHitoshiStyleValid : styles.emailHitoshiStyle }
        borderColor={COLORS.inputBorderColor} 
        borderHeight={1} 
        label={'email'} 
        inputPadding={16}
        value={emailValue}
        onChangeText={emailChangeInputValue}>
      </Hoshi>
      <Text style={ emailIsValid ? styles.errorTextHidden : styles.errorTextVisible }>Min length 7</Text>
    </>
  )
}

const styles = StyleSheet.create({
  emailHitoshiStyle: {
    marginBottom: 20
  },
  emailHitoshiStyleValid: {
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

export default EmailFormInputRegister