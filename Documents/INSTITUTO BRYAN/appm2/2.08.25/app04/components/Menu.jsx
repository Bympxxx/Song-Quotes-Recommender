import { Image, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/menu.json'

export default function Menu() {
    const menu = datos;


  return (
    <View>
      <Text style={{fontSize:30}}>Menu</Text>
      <FlatList
        data = {menu}
        renderItem={({item}) =>
            <View style={styles.container}>
            <Text>{item.strCategory}</Text>
            <Image style={styles.imgitem}source={{uri: item.strCategoryThumb}} />
            </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#dfdfdfff",
        width:300,
        margin: 5,
        borderRadius:10,
        padding:10
    },
    imgitem: {
        width:70,
        height:70,
        resizeMode: 'contain'
    }

})
