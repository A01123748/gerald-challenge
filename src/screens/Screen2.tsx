import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import DrawerView from './Drawer/DrawerView';

export default function Screen2({navigation}) {
  return (
    <DrawerView style={styles.container}>
      <Text>Screen2</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Home")} title="Navigate back to Home"/>
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
