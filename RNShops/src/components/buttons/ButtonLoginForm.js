import React from 'react';
import { Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getPassword, getEmail } from '../../store/selectors';

const ButtonLoginForm = ({ onGetPasswordValue, onGetEmailValue, loginState, title, navigation }) => {

  const {
    emailValue,
    passwordValue,
    emailIsValid,
    passwordIsValid
  } = loginState

  const onUserLoginHandler = () => {
    (onGetPasswordValue === passwordValue && onGetEmailValue === emailValue)
      ? navigation.navigate('Shops')
      : Alert.alert(
        'Email or password are incorrect!'
      )
  }

  return (
    <View>
      <Button 
        disabled={(emailIsValid && passwordIsValid)
          ? false
          : true
        }
        onPress={onUserLoginHandler}
        title={title}
      >
      </Button>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    onGetPasswordValue: getPassword(state),
    onGetEmailValue: getEmail(state),
  }
}

export default connect(mapStateToProps)(ButtonLoginForm)