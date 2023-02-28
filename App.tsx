import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Contact from './src/screens/Contact';
import HomeScreen from './src/screens/Home';
import CustomDrawer from './src/screens/Drawer/CustomDrawer';
import { Platform, StyleSheet} from 'react-native';
import colors from './src/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else {
        iconName = focused ? 'ios-person' : 'ios-person-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
  })
  }>
  <Tab.Screen name="Home" component={StackNavigator}/>
  <Tab.Screen name="Contact" component={Contact}/>
  </Tab.Navigator>);
}

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Screen1" component={Screen1}/>
      <Stack.Screen name="Screen2" component={Screen2}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
            <NavigationContainer>
              <Drawer.Navigator initialRouteName='START' 
              screenOptions={{
                drawerStyle: styles.drawer,
                drawerType: 'back',
                overlayColor: 'transparent', 
                swipeEdgeWidth: Platform.OS === 'android' && 180,
                sceneContainerStyle: styles.sceneStyle,
                headerShown: false
              }}
                drawerContent={(props) => <CustomDrawer {...props}/>}
              >
              <Drawer.Screen name="START" component={TabNavigator} options={{ item: {route: 'Start', label: 'Start'} }}/>
              <Drawer.Screen name="Screen1" component={Screen1} options={{ item: {route: 'Screen1', label: 'Screen1'} }}/>
              <Drawer.Screen name="Screen2" component={Screen2} options={{ item : {route: 'Screen2', label: 'Screen2'} }}/>
              </Drawer.Navigator>
            </NavigationContainer>
          );
}


const styles = StyleSheet.create({
  drawer: {
    width: 220,
    backgroundColor: colors.primary,
  },
  backgroundStyle: {
    flex:1,
    backgroundColor: colors.white,
  },
  sceneStyle:{
    backgroundColor: 'transparent'
  }
})