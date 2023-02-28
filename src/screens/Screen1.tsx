import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import DrawerView from './Drawer/DrawerView';

export default function Screen1({navigation}) {
  return (
    <DrawerView style={styles.container}>
      <Text>Screen1</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Screen2")} title="Navigate to Screen 2"/>
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
