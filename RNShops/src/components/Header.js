import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../shared/theme/colors'

const Header = ({ title }) => {
  return (
   <View style={styles.container}> 
     <Text style={styles.text}>{title}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: COLORS.title,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Header