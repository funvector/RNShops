import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../shared/theme/colors'
import { FlatList } from 'react-native-gesture-handler';
import { DATA } from '../data/data'
import Shop from '../components/Shop';

const ShopListPage = ({ navigation, state }) => {

  const openShopHandler = (shop) => {
    navigation.navigate('Shop', {
      shopId: shop.id
    })
  }

  return (
    <View style={styles.container}> 
      <FlatList
        data={DATA}
        keyExtractor={(shop) => shop.id.toString()}
        renderItem={({item}) => <Shop shop={item} onOpen={openShopHandler}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.bgColor
  },
});

export default ShopListPage