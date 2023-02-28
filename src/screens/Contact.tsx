import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import DrawerView from './Drawer/DrawerView';

export default function Contact({navigation}) {
  return (
    <DrawerView style={styles.container} navigation={navigation}>
      <Text>Contact Info:</Text>
      <Text>Eliseo Fuentes</Text>
      <Text>eliseo.fuentes.garcia@gmail.com</Text>
      <StatusBar style="auto" />
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
