import {StyleSheet, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import colors from '../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const DrawerView = ({children, style}) => {
    const drawerProgress = useDrawerProgress();
    const navigation = useNavigation();
    const toggleDrawer = () => navigation.toggleDrawer();
    const viewStyles = useAnimatedStyle(() => {
        const rotateZ = interpolate(
            drawerProgress.value,
            [0,1],
            [0,-25],
        );
        const borderRadius = interpolate(drawerProgress.value,
            [0,1],
            [0,40]
            );
        return {
            transform: [{rotateZ: `${rotateZ}deg`}], borderRadius,
        }
    });


    return(
        <Animated.View style={[styles.container, style, viewStyles]}>
            <View style={styles.childrenContainer}>
                <View style={styles.menu}>
                <TouchableOpacity  onPress={toggleDrawer}>
                    <Ionicons name={'menu'} size={32} color={colors.dark}/>
                </TouchableOpacity>
                </View>
                {children}
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    childrenContainer: {
        flex: 1,
        justifyContent:'flex-start',
        paddingTop: 30,
        width: '100%'
    },
    menu: {
    }
});

export default DrawerView;