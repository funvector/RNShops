import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'

const Shop = ({ shop, onOpen }) => {
  return (
    <View style={styles.shop}>
      <ImageBackground
      style={styles.image}
        source={{uri: shop.image}}
      >
        <View style={styles.textWrap}>
          <Text style={styles.title}>{shop.title}</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => onOpen(shop)}
      >
        <Text style={styles.titleInfo}>Info</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  shop: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: { 
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff'
  },
  titleInfo: {
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
    textAlign: 'center'
  }
})

export default Shop