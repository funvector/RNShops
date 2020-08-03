import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from '../screens/RegisterPage';
import LogoutPage from './LogoutPage';
import LoginPage from './LoginPage';
import ShopListPage from './ShopListPage';
import ShopPage from './ShopPage';

const MainLayoutPage = () => {

  const [state, setState] = useState({
    passwordValue: '',
    passwordIsValid: false,
    emailValue: '',
    emailIsValid: false,
    nameValue: '',
    nameIsValid: false,
    isThemeDarck: true
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

  const Stack = createStackNavigator();
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn'>
          {(props) => <LoginPage {...props} state={state} />}
        </Stack.Screen>
        <Stack.Screen name='LogOut'>
          {(props) => <LogoutPage {...props} />}
        </Stack.Screen>
        <Stack.Screen name='CreateAccaunt'>
          {(props) => <RegisterPage 
            {...props}
            inputPasswordHandler={onPasswordChangeHandler}
            inputEmailHandler={onEmailChangeHandler}
            inputNamelHandler={onNameChangeHandler}
            state={state} 
          />}
        </Stack.Screen>
        <Stack.Screen name='Shops'>
          {(props) => <ShopListPage 
            {...props}
            state={state} 
          />}
        </Stack.Screen>
        <Stack.Screen name='Shop'>
          {(props) => <ShopPage 
            {...props}
            state={state} 
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainLayoutPage
