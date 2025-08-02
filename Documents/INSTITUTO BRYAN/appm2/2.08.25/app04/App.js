import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './components/Calculadora';
import Masa from './components/Masa';

export default function App() {
  return (
    <View style={styles.container}>
    <Calculadora></Calculadora>
    </View>
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
