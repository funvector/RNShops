import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RegisterPage from '../screens/RegisterPage';
import COLORS from '../shared/theme/colors';
import LogoutPage from './LogoutPage';
import LoginPage from './LoginPage';

const MainLayoutPage = () => {

  const [state, setState] = useState({
    passwordValue: '',
    passwordIsValid: false,
    emailValue: '',
    emailIsValid: false,
    nameValue: '',
    nameIsValid: false
  })
  
  const onPasswordChangeHandler = (value) => {
    setState((prevState) => {
      if (value.trim().length > 7 && (!value.includes(' ') && value !== '')) {
        return {...prevState, passwordValue: value, passwordIsValid: true}
      }
      return {...prevState, passwordValue: value, passwordIsValid: false}
    })
  }

  const onEmailChangeHandler = (value) => {
    setState((prevState) => {
      if (/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i.test(value.trim())) {
       return {...prevState, emailValue: value, emailIsValid: true}
      }
      return {...prevState, emailValue: value, emailIsValid: false}
    })
  }

  const onNameChangeHandler = (value) => {
    setState((prevState) => {
      if (value.trim() !== '') {
       return {...prevState, nameValue: value, nameIsValid: true}
      }
      return {...prevState, nameValue: value, nameIsValid: false}
    })
  }
  
  return (
    <View style={styles.container}>
      <LogoutPage/>
      <RegisterPage 
        inputPasswordHandler={onPasswordChangeHandler}
        inputEmailHandler={onEmailChangeHandler}
        inputNamelHandler={onNameChangeHandler}
        state={state}
      />
      <LoginPage
        state={state}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgColor,
    flex: 1
  }
});

export default MainLayoutPage