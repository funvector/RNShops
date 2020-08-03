import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import COLORS from '../shared/theme/colors'
import { DATA } from '../data/data'
import { ScrollView } from 'react-native-gesture-handler'

const ShopPage = ({ route }) => {

  const shopId = route.params?.shopId ?? undefined 
  const shop = DATA.find((item) => item.id === shopId)
  const shopOverview = `
    Title: ${shop.title}

    City: ${shop.city}

    Type: ${shop.type}

    Working Hours: ${shop.openingTime} - ${shop.closingTime}

    Description: ${shop.description}
  `

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: shop.image}} 
        style={styles.img}
      />
      <ScrollView>
        <Text style={styles.overview}>{shopOverview}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor
  },
  img: {
    width: '100%',
    height: 200
  },
  overview: {
    color: 'gray',
    fontSize: 15
  }
})

export default ShopPage