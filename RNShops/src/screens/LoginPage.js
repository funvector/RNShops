import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PasswordFormInputLogin from '../components/inputs/PasswordFormInputLogin';
import EmailFormInputLogin from '../components/inputs/EmailFormInputLogin';
import ButtonLoginForm from '../components/buttons/ButtonLoginForm';
import Header from '../components/Header';

const LoginPage = ({ state }) => {

  const [loginState, setLoginState] = useState({
    passwordValue: '',
    passwordIsValid: false,
    emailValue: '',
    emailIsValid: false
  })

  const onPasswordCheckHandler = (value) => {
    setLoginState((prevState) => {
      if (value.trim().length > 7 && (!value.includes(' ') && value !== '')) {
        return {...prevState, passwordValue: value, passwordIsValid: true}
      }
      return {...prevState, passwordValue: value, passwordIsValid: false}
    })
  }
  
  const onEmailCheckHandler = (value) => {
    setLoginState((prevState) => {
      if (/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i.test(value.trim())) {
       return {...prevState, emailValue: value, emailIsValid: true}
      }
      return {...prevState, emailValue: value, emailIsValid: false}
    })
  }

  return (
    <>
      <Header title='Login Page' />
      <ScrollView style={styles.container}>
        <PasswordFormInputLogin inputPasswordHandler={onPasswordCheckHandler} loginState={loginState} state={state}/>
        <EmailFormInputLogin inputEmailHandler={onEmailCheckHandler} loginState={loginState} state={state}/>
        <ButtonLoginForm title={'LOGIN'}
        loginState={loginState}/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default LoginPage