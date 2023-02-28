import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import DrawerView from './Drawer/DrawerView';

export default function HomeScreen({navigation}) {
  return (
    <DrawerView style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Screen1")} title="Navigate to Screen 1"/>
    </DrawerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
