import {  Alert, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import DrawerItemList, { DrawerItem } from './DrawerItemList'
import colors from '../../constants/colors'

const CustomDrawer = (props) => {
  const scrollRef = useRef(null)

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [-200, 0],
    )
    return {
      transform: [{ translateX }]
    }
  })

  const viewStyles2 = (type) => useAnimatedStyle(() => {
    const val = type === 'top' ? -100 : 100;
    const translateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [val, 0],
    )
    const opacity = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 1],
    )
    return {
      transform: [{ translateY }], opacity
    }
  })

  return (
    <Animated.View style={[styles.container, viewStyles2('top')]}>
      <View style={[styles.row, styles.view, styles.marginTop]}>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
        <DrawerItemList {...props} styles={styles} />
        <View style={styles.separator} />
        <DrawerItem
            tabBarTestID={'testID'}
            label={"Sign Out"}
            onPress={() => Alert.alert("Signing out...")}
            activeItemColor={null}
            activeTextColor={colors.white}
            styles={styles}
          />
      </Animated.ScrollView>
    </Animated.View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    borderRadius: 10,
    marginHorizontal: 16 / 2,
    padding: 16 / 1.5,
    justifyContent: 'center',
    top: 30
  },
  marginTop: {
    marginTop: 16 / 2,
  },
  marginVertical: {
    marginVertical: 16 / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent:'space-between',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    color: colors.white,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 30,
    marginHorizontal: 30
  },
  headerTitle: {
    fontSize: 24,
    color: colors.white,
    alignSelf: 'center',
  },
})