import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/register'
import { Button, View } from 'react-native';
import COLORS from '../../shared/theme/colors';

const ButtonLoginForm = ({ title, navigation }) => {

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    navigation.navigate('CreateAccaunt')
  }

  return (
    <View>
      <Button
        color={COLORS.logoutButton}
        onPress={logoutHandler}
        title={title}>
      </Button>
    </View>
  )
}

export default ButtonLoginForm