import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import ButtonLogoutForm from '../components/buttons/ButtonLogoutForm';

const LogoutPage = () => {

  return (
    <View style={styles.container}>
      <Header title='Logout Page' />
      <ButtonLogoutForm title={'LOGOUT'} />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LogoutPage