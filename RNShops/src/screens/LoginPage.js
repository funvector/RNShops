import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import COLORS from '../shared/theme/colors'
import PasswordFormInputLogin from '../components/inputs/PasswordFormInputLogin';
import EmailFormInputLogin from '../components/inputs/EmailFormInputLogin';
import ButtonLoginForm from '../components/buttons/ButtonLoginForm';

const LoginPage = ({ state, navigation }) => {

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
      <ScrollView style={styles.container}>
        <PasswordFormInputLogin 
          inputPasswordHandler={onPasswordCheckHandler} 
          loginState={loginState} 
          state={state}
        />
        <EmailFormInputLogin 
          inputEmailHandler={onEmailCheckHandler} 
          loginState={loginState} 
          state={state}
        />
        <ButtonLoginForm 
          title={'LOGIN'}
          loginState={loginState}
          navigation={navigation}
        />
        <View 
          style={styles.regPageNavBtn}
          onTouchStart={() => navigation.navigate('RegisterPage')}
        > 
          <Text style={{color: '#fff'}}>Go to Register Page</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../shared/icons/rightArrow.png')}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.bgColor,
  },
  regPageNavBtn: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tinyLogo: {
    width: 30,
    height: 20,
  },
});

export default LoginPage