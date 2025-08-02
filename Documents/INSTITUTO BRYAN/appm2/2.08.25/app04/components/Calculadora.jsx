import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
  Vibration
} from 'react-native';

export default function Calculadora() {
  const [temperatura, setTemperatura] = useState('');

  function transformar() {
    const tempNum = parseFloat(temperatura);
    if (isNaN(tempNum)) {
      Alert.alert("Error", "Por favor ingresa un número válido.");
      return;
    }
    let C = (tempNum - 32) / 1.8;
    Alert.alert("Transformación", "La temperatura en °C es: " + C.toFixed(2));
    Vibration.vibrate(500);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <Image
        style={styles.img}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/019/860/394/non_2x/thermometer-icon-colorful-free-png.png"
        }}
      />

      <TextInput
        placeholder="Ingresar temperatura en °F"
        style={styles.input}
        keyboardType="numeric"
        value={temperatura}
        onChangeText={setTemperatura}
      />

      <TouchableOpacity style={styles.button} onPress={transformar}>
        <Text style={styles.buttonText}>Calcular</Text>
        <Image
          style={styles.img}
          source={require('./assets/images/diablo.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    marginBottom: 20
  },
  input: {
    fontSize: 30,
    borderBottomWidth: 1,
    width: '80%',
    marginBottom: 20
  },
  img: {
    width: 70,
    height: 100,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30
  }
});