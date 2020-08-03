import React from 'react';
import { StyleSheet, View } from 'react-native';
import COLORS from '../shared/theme/colors'
import ButtonLogoutForm from '../components/buttons/ButtonLogoutForm';

const LogoutPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ButtonLogoutForm 
        title={'LOGOUT'} 
        navigation={navigation}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor
  },
});

export default LogoutPage