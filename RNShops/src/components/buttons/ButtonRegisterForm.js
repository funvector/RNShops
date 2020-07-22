import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/register'
import { Button, View } from 'react-native';

const ButtonRegisterForm = ({ state, title }) => {

  const dispatch = useDispatch()

  const {
    emailIsValid,
    passwordIsValid,
    nameIsValid,
    passwordValue,
    emailValue,
    nameValue
  } = state

  const onSaveUserRegisterHandler = () => {
    const userData = {
      passwordValue,
      emailValue,
      nameValue
    }
    dispatch(register(userData))
  }

  return (
    <View>
      <Button 
        disabled={(emailIsValid && passwordIsValid && nameIsValid) ?
          false
          :true
        }
        onPress={onSaveUserRegisterHandler}
        title={title}>
      </Button>
    </View>
  )
}

export default ButtonRegisterForm