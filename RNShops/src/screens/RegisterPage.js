import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import COLORS from '../shared/theme/colors'
import PasswordFormInputRegister from '../components/inputs/PasswordFormInputRegister';
import EmailFormInputRegister from '../components/inputs/EmailFormInputRegister';
import NameFormInputRegister from '../components/inputs/NameFormInputRegister';
import ButtonRegisterForm from '../components/buttons/ButtonRegisterForm';

const RegisterPage = ({ inputPasswordHandler, inputEmailHandler, inputNamelHandler, state, navigation }) => {

  return (
    <>
      <ScrollView style={styles.container}> 
        <PasswordFormInputRegister inputPasswordHandler={inputPasswordHandler} state={state}/>
        <EmailFormInputRegister inputEmailHandler={inputEmailHandler} state={state}/>
        <NameFormInputRegister inputNamelHandler={inputNamelHandler}  state={state}/>
        <ButtonRegisterForm title={'REGISTER'} navigation={navigation} state={state}/>
      </ScrollView>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.bgColor
  },
});

export default RegisterPage