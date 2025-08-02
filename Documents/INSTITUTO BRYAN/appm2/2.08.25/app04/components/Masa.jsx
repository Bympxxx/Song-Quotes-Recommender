import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Masa() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    function calcular(){
        let imc = peso / (altura*altura);
        if(imc < 18.5){
            Alert.alert("Peso insuficiente");
        }else if(imc >=25){
            Alert.alert("Tiene sobrepeso")
        }else{
            Alert.alert("Peso adecuado")
        }
    }

  return (
    <View>
      <Text style={styles.titulo}>Masa Corporal</Text>
      <TextInput placeholder='Ingresar peso'
      style={styles.input}
      keyboardType='numeric'
      onChangeText={(texto)=> setPeso(texto)}/>

      <TextInput placeholder='Ingresar altura'
      style={styles.input}
      keyboardType='numeric'
      onChangeText={(texto)=>setAltura(texto)}/>
      <TouchableOpacity onPress={()=> calcular()}>
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:30
    },
    input:{
        margin:5,
        backgroundColor: "#d2dffaff",
        borderColor: "#000000",
        borderRadius: 10
    }
})
