import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Linking } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { size } from '../constants/dimension'

const CustomeDrawerNavigation = () => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name={"close"} size={30} />

        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name={"sun"} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.drawableContainer}>
        <DrawerItem label={"profile"} icon={() => <FontAwesome name={"user"} size={size.md} lableStyle={styles.labelStyle} />} />
        <DrawerItem label={"support"} icon={() => <MaterialIcons name={"contact-support"} size={size.md} lableStyle={styles.labelStyle} />} />
        <DrawerItem label={"terms and condition"} icon={() => <FontAwesome name={"link"} size={size.md} lableStyle={styles.labelStyle} />} />
        <DrawerItem label={"privacy policy"} icon={() => <MaterialIcons name={"privacy-tip"} size={size.md} lableStyle={styles.labelStyle} />} />

      </View>
    </DrawerContentScrollView>
  )
}

export default CustomeDrawerNavigation

const styles = StyleSheet.create({
  container: {
    paddingVertical: size.sm,
    paddingHorizontal: size.sm

  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: size.sm

  },
  labelStyle: {
    fontSize: 35

  },
  drawableContainer: {
    marginVertical:0

  }
})