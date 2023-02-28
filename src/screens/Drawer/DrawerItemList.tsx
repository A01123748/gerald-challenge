import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const DrawerItem = ({ label, onPress, tabBarTestID,
  activeItemColor, styles, activeTextColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor}]}
    >
      <View style={styles.row}>
        <Text style={[styles.label, {color: activeTextColor}]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const DrawerItemList = ({ state, descriptors, navigation, styles }) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        const drawerItem = options.item;
        const activeItemColor = isFocused ? colors.activeItemColor : null;
        const activeTextColor = isFocused ? colors.activeTextColor: colors.white;

        return (
          <DrawerItem key={index} label={drawerItem?.label}
            tabBarTestID={options.tabBarTestID}
            onPress={onPress}
            activeItemColor={activeItemColor}
            activeTextColor={activeTextColor}
            styles={styles}
          />
        )
      })}
    </View>
  )
}

export default DrawerItemList
export {DrawerItem};
