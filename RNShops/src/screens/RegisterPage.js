import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PasswordFormInputRegister from '../components/inputs/PasswordFormInputRegister';
import EmailFormInputRegister from '../components/inputs/EmailFormInputRegister';
import NameFormInputRegister from '../components/inputs/NameFormInputRegister';
import ButtonRegisterForm from '../components/buttons/ButtonRegisterForm';
import Header from '../components/Header';

const RegisterPage = ({ inputPasswordHandler, inputEmailHandler, inputNamelHandler, state }) => {

  return (
    <>
      <Header title='Register Page' />
      <ScrollView style={styles.container}> 
        <PasswordFormInputRegister inputPasswordHandler={inputPasswordHandler} state={state}/>
        <EmailFormInputRegister inputEmailHandler={inputEmailHandler} state={state}/>
        <NameFormInputRegister inputNamelHandler={inputNamelHandler}  state={state}/>
        <ButtonRegisterForm title={'REGISTER'} state={state}/>
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

export default RegisterPage